import { inject, injectable } from "tsyringe";

import { User } from "../../infra/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ListUsersUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRespository: IUsersRepository){}

    async execute(): Promise<User[]> {
        const users = await this.usersRespository.list();

        return users;
    }
}

export { ListUsersUseCase }