import { User } from "../models/user.model.js";

export function validationUser(email, password) {
    // Validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { error: "Email inválido" };
    }

    // Validar la contraseña (mínimo 6 caracteres)
    if (password.length < 6) {
        return { error: "La contraseña debe tener al menos 6 caracteres" };
    }

    return { error: null };
}

export async function isEmailRegistered(email) {
    try {
        const user = await User.findOne({ email });
        return user !== null;
    } catch (error) {
        throw new Error("Error al verificar el email: " + error.message);
    }
}
