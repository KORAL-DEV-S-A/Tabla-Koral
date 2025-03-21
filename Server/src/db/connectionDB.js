import mongoose from 'mongoose';
import config from '../config.js';

const connectionDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_URL, {});
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
};

export { connectionDB };