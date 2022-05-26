import { Request, response, Response } from "express";
import { container } from "tsyringe";
import { CreateHealthInsurancesUseCase } from "./CreateHealthInsurancesUseCase";

class CreateHealthInsurancesController {
    async handle (request: Request, Response:Response): Promise<Response> {
        const { name, table_id } = request.body;

        const createHealthInsurancesUseCase = container.resolve(CreateHealthInsurancesUseCase);

        const healthInsurance = await createHealthInsurancesUseCase.execute({ name, table_id });

        return response.status(201).json(healthInsurance);
    }
}

export { CreateHealthInsurancesController }