import { Router, Request, Response, request, response } from "express";
import { UserService } from "../services/AuthService";

class AuthController {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    };

    private initializeRoutes() {
        this.router.post('/login', this.login);
    };

    login = async (request: Request, response: Response) => {
        const { username, password } = request.body;

        try {
            const result = await UserService.getInstance().loginUsername(username, password);
            console.log('RESULT', result)
            response.status(200).send(result);
        } catch (error) {
            console.error(error);
            response.status(400).send({ message: 'Error 400' });
        };

    }
}

export { AuthController }