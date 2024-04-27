import { Users } from "../data/User";

const INVALID_DATA = 'Invalid username or password!';

export class UserService {
    static instance: UserService;

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserService();
        }
        return this.instance;
    }

    loginUsername = async (username: String, password: String) => {
        let user = '';
        let userPassword = '';

        for (let i in Users) {
            if (Users[i].username === username) {
                user = Users[i].username;
                userPassword = Users[i].password;
            }
        }

        console.log('Login', username, password)

        if (!user) {
            throw new Error(INVALID_DATA);
        };

        if (!username || !password) {
            throw new Error("Missing data!");
        };

        const isValid = (password === userPassword);

        if (!isValid) {
            throw new Error(INVALID_DATA)
        } else {
            return true
        }
    }


}