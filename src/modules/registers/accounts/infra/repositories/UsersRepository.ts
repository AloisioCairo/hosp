import { getRepository, Repository } from "typeorm";
import { IUserDTO } from "../../dtos/IUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository  implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });

        return user;
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();

        return users;
    }

    async create(data: IUserDTO): Promise<User> {
        const user = this.repository.create(data);

        await this.repository.save(user);

        return user;
    }
}

export { UsersRepository }