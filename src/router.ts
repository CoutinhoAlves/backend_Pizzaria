import { Request, Response, Router } from "express";

const router = Router();

router.post('/users', (_req: Request, res: Response) => {
    res.json({ message: 'User created successfully' });
})

export { router };