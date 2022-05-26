import { IUserDTO } from "../../dto/IUsersDTO";
import { User } from "../../infra/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {

    users: User[] = [];

    async findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
    async list(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    
    async create(data: IUserDTO): Promise<User> {
        throw new Error("Method not implemented.");
    }
}

export { UsersRepositoryInMemory }