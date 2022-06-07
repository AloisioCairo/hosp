import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTableUseCase } from "./CreateTableUseCase";

class CreateTableController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, active } = request.body;

        const createTableUseCase = container.resolve(CreateTableUseCase)

        const table = createTableUseCase.execute({ name, active });

        return response.status(201).json(table);
    }
}

export { CreateTableController }