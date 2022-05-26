import { IUserDTO } from "../dto/IUsersDTO";
import { User } from "../infra/entities/User" 

interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    list(): Promise<User[]>;
    create(data : IUserDTO): Promise<User>;
}

export { IUsersRepository }