import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe ("Create user", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    })

    it("should be able to create a new user", async()=> {
        const user = await createUserUseCase.execute({
            name: "ALOISIO", 
            email: "teste@teste.com.br", 
            password: '123456',
            admin: false, 
            avatar: "", 
            active: true
        });

        expect(user).toHaveProperty("id");
    })

    it("should not be able to create a new user with exists email", async()=> {
        await createUserUseCase.execute({
            name: "ALOISIO", 
            email: "aloisio@teste.com.br", 
            password: '123456',
            admin: false, 
            avatar: "", 
            active: true
        });

        await expect(createUserUseCase.execute({
            name: "ALOISIO SAMPAIO", 
            email: "aloisio@teste.com.br", 
            password: '123456',
            admin: false, 
            avatar: "", 
            active: true
        })
        ).rejects.toEqual(new Error("Erro ao tentar criar um novo cadastro de usuário. Error: User with email exists."));
    })
})