import {Router} from "express"

const router = Router()

router.get('/test', (req, res) => {
    res.json({ message: 'This is a test route!' });
});
  
export default router;