import { IUserDTO } from "../../dtos/IUsersDTO";
import { User } from "../../infra/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {

    users: User[] = [];

    async findByEmail(email: string): Promise<User> {
    
        // console.log("findByEmailInMemory__" + email);

        return this.users.find((user) => user.email === email);
    }
    
    async list(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    
    async create({ name, email, password, admin, avatar, active }: IUserDTO): Promise<User> {
        const user = new User();

        Object.assign(user, { name, email, password, admin, avatar, active });

        this.users.push(user);

        return user;
    }
}

export { UsersRepositoryInMemory }