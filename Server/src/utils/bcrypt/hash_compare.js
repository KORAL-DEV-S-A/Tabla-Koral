import bcrypt from 'bcrypt';

export async function hash(password) {
    try {

        return await bcrypt.hash(password, 10);
    } catch (error) {
        console.error("Error hashing password:", error);
        throw new Error("Error hashing password");
    }
}

export async function compare(password, hash) {
    try {
        console.log({password, hash});
        // Compare the password with the hash
        return await bcrypt.compare(password, hash);
    } catch (error) {
        console.error("Error comparing password:", error);
        throw new Error("Error comparing password");
    }
}