import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTableUseCase } from "./ListTableUseCase";

class ListTableController {

    async handle(request: Request, response: Response): Promise<Response> {
        const listTableUseCase = container.resolve(ListTableUseCase);

        const tables = await listTableUseCase.execute();

        return response.json(tables);
    }
}

export { ListTableController }