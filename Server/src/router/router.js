import { Router } from 'express';
import {io} from '../app.js';
import router_user from './user.router.js';

// Router
const router_index = Router();

// Routes
router_index.get('/', (req, res) => {
    io.emit('welcome', `Hello World ${io.id}`);
    res.send('Hello World');
});

router_index.use('/user', router_user);


export default router_index;