import { Router } from "express";
const router = Router();
import User from "../models/user.js";
import bcrypt from "bcryptjs";
router.post('/register', async (req, res) => {
    try {

        const { email, password } = req.body

        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, password: hashedPassword })

        await user.save()

        res.status(201).json({ message: 'Пользователь создан' })

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.post('/login', async (req, res) => {
    
})

export default router;