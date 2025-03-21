import { Router } from 'express';

// Router
const router_index = Router();

// Routes
router_index.get('/', (req, res) => {
    res.send('Hello World');
});


export default router_index;