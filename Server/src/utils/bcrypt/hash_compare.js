import bcrypt from 'bcrypt';

export async function hash(password) {
    return bcrypt.hash(password, 10);
}

export async function compare(password, hash) {
    return bcrypt.compare(password, hash);
}