const { response, request } = require("express");
const User = require("../models/user");

const login = async (req = request, res = response) => {
    try {
        const { email, password } = req.body;

        // Validate exists email
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'Invalid credentials.'
            });
        }

        // Assuming your User model has a direct comparison for password
        if (user.password !== password) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'Invalid credentials.'
            });
        }

        // If you reach here, credentials are valid
        const { name, lastName, phone, email: emailUser, image, role_id } = user;

        const dataUser = { id: user.id, name, lastName, phone, email: emailUser, image, role_id };

        return res.status(200).json({
            success: true,
            data: dataUser
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message
        });
    }
}

module.exports = {
    login,
}