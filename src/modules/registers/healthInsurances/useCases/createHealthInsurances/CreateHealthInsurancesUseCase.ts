import { inject, injectable } from "tsyringe";
import { IHealthInsurancesDTO } from "../../dto/IHealthInsurancesDTO";
import { IHealthInsurancesRepository } from "../../repositories/IHealthInsurancesRepository";

@injectable()
class CreateHealthInsurancesUseCase {
    constructor(
        @inject("HealthInsurancesRepository")
        private healthInsurancesRepository: IHealthInsurancesRepository
    ){}

    async execute({name, table_id } : IHealthInsurancesDTO): Promise<void> {
        // const healthInsuranceExists = await this.healthInsurancesRepository.findByName(name);

        // if (healthInsuranceExists) {
        //     // throw new AppError("Health insurance already exists.");
        // }

        // await this.healthInsurancesRepository.create({ name, table_id });
    }
}

export { CreateHealthInsurancesUseCase }