import * as express from "express";
import { AuthController } from "../controllers/AuthController";

class MainRouter {
    router: express.Router;
    subrouter: express.Router;
    authController: AuthController;

    constructor() {
        this.router = express.Router();
        this.subrouter = express.Router();
        this.authController = new AuthController();

        this.registerRoutes();
        this.router.use(this.subrouter);
    }

    registerRoutes() {
        this.subrouter.use('/user', this.authController.router);
    }
}

export { MainRouter };