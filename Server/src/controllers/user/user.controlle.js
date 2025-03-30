import { User } from '../../models/user.model.js';
import { validationUser, isEmailRegistered } from '../../utils/user.validation.js';
import { compare, hash } from '../../utils/bcrypt/hash_compare.js';
import jwt from 'jsonwebtoken';
import config from '../../config.js';


export async function registerUserAsync(req, res) {
    const { username, email, password } = req.body;

    // Validar el email y la contraseña
    const { error } = validationUser(email, password);
    if (error) {
        return res.status(400).json({ error });
    }

    // Verificar si el email ya está registrado
    const isRegistered = await isEmailRegistered(email);

    if (isRegistered) {
        return res.status(400).json({ error: "El email ya está registrado" });
    }

    // Crear el nuevo usuario
    const newUser = new User({ username, email, password: await hash(password), boards: [] });

    try {
        await newUser.save();
        res.status(201).json({ message: "Usuario registrado con éxito" });
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        res.status(500).json({ error: "Error al registrar el usuario" });
    }
}

export async function loginUser(req, res) {
    const { email, password } = req.body;

    // El usuario existe
    const usuario = await User.findOne({ email });
    
    console.log({usuario});
    if (!usuario) {
        return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    }

    // Validar la contraseña

    // console.log({usuario, passUser: usuario.password, password});
    const isValidPassword = await compare(password, usuario.password);

    if (!isValidPassword) {
        return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    }

    // Crear el token de autenticación
    const token = await jwt.sign({ usuario }, config.JWT_SECRET, { expiresIn: "1h" });
    // Guardar el token en una cookie
    res.cookie("authToken", token,{
        httpOnly: true,
        maxAge: 1000 * 60 * 60, // 1 hora
    })

    res.json({ message: "Usuario autenticado"});
}

export function logoutUser(req, res) {
    // Limpiar la cookie de autenticación
    res.clearCookie("authToken", { httpOnly: true });
    res.json({ message: "Usuario desconectado" });
}

export function getProfileOfToken (req, res) {
    const token = req.cookies.authToken;
    if (!token) return res.status(401).json({ error: "No autenticado" });

    res.json({ message: "Usuario autenticado", token, payload: jwt.verify(token, config.JWT_SECRET) });
}