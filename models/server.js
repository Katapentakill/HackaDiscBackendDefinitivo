const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const db = require('../db/connection'); // Asegúrate de ajustar la ruta según la estructura de tu proyecto
const User = require('./user')
const Role = require('./role');// Asegúrate de tener los modelos correctamente definidos
const Multicompany = require('./multicompany');
const Worker = require('./worker');
const Evaluation = require('./evaluation');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;

        this.paths = {
            auth: '/auth',
            evaluation: "/evaluation",
            worker: '/workers',
            multicompany: '/multicompany',
            user: '/user',
            role: '/role'
        }

        // Conectar a la base de datos
        this.dbConnection();

        // Middleware
        this.middlewares();

        // Rutas
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate(); // Sincronizar modelos con la base de datos
            await User.sync({ force: false });
            await Role.sync({ force: false });
            await Multicompany.sync({ force: false });
            await Worker.sync({ force: false });
            await Evaluation.sync({ force: false });
            console.log('Base de datos conectada');
        } catch (error) {
            console.error('Error al conectar con la base de datos:', error);
        }
    }

    middlewares() {
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/authRoutes'));
        this.app.use(this.paths.evaluation, require('../routes/evaluationRoutes')); // Asegúrate de tener definidas tus rutas correctamente
        this.app.use(this.paths.multicompany, require('../routes/companyRoutes'));
        this.app.use(this.paths.worker, require('../routes/workerRoutes'));
        this.app.use(this.paths.user, require('../routes/userRoutes'));
        this.app.use(this.paths.role, require('../routes/roleRoutes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;