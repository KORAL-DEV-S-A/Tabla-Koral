import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Router from './router/router.js';
import config from './config.js';
import { connectionDB } from './db/connectionDB.js';

// Express
const app = express();

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
app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});