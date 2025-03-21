import { Router } from 'express';
import {io} from '../app.js';

// Router
const router_index = Router();

// Routes
router_index.get('/', (req, res) => {
    io.emit('welcome', `Hello World ${io.id}`);
    res.send('Hello World');
});


export default router_index;