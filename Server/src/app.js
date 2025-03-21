import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import {Server} from 'socket.io';
import config from './config.js';
import {createServer} from 'http';
import Router from './router/router.js';
import { connectionDB } from './db/connectionDB.js';


// Express
const app = express();
const httpServer = createServer(app);
export const io = new Server(httpServer, {
    cors: {
        origin: '*',
    }
});


io.on('connection', (socket) => {
    console.log('Socket connected', socket.id);
    
    socket.on('disconnect', () => {
        console.log('Socket disconnected');
    });
});


// Middleware
app.use(cors()); 
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectionDB();

// // Routes
app.use('/api/v1', Router);

// // Error handler
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

// Server
httpServer.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});