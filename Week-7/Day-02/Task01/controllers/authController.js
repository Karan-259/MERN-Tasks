const User = require('../models/user')

const bcrypt = require('bcryptjs')

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(200).json({ messsage: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            name, email, password: hashedPassword
        });


        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" })
    }
}