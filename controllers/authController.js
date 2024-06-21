const { response, request } = require("express");
const User = require("../models/user");

const login = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;

    // Validar si existe el usuario
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Credenciales inválidas.",
      });
    }

    // Comparar contraseñas
    if (user.password !== password) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'Credenciales inválidas.',
        });
    }

    // Si las credenciales son válidas
    const { id, email: userEmail, role_id, nombre, company_id, area_id } = user;

    const dataUser = {
      id,
      email: userEmail,
      role_id,
      nombre,
      company_id,
      area_id,
    };

    return res.status(200).json({
      success: true,
      data: dataUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};

module.exports = {
  login,
};