import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { User } from "../../infra/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor (
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){}

    async execute({ name, email, password, admin, avatar, active }): Promise<User> {
        try {
            const userAlreadyExists = await this.userRepository.findByEmail(email);

            // console.log("userAlreadyExists__" + userAlreadyExists);            

            if (userAlreadyExists) {
                throw new Error("User with email exists.");
            }
    
            const passwordHash = hash(password, 8);
    
            const user = await this.userRepository.create({ name, email, password, admin, avatar, active });
    
            return user;   
        } catch (error) {
            throw new Error("Erro ao tentar criar um novo cadastro de usuário. " + error);
        }
    }
}

export { CreateUserUseCase }