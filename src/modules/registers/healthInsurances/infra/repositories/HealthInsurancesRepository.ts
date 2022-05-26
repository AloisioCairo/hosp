import { IHealthInsurancesDTO } from "../../dto/IHealthInsurancesDTO";
import { IHealthInsurancesRepository } from "../../repositories/IHealthInsurancesRepository";
import { HealthInsurance } from "../entities/HealthInsurance";

class HealthInsurancesRepository implements IHealthInsurancesRepository {
    findByEmail(email: string): Promise<HealthInsurance> {
        throw new Error("Method not implemented.");
    }
    list(): Promise<HealthInsurance[]> {
        throw new Error("Method not implemented.");
    }
    create(data: IHealthInsurancesDTO): Promise<HealthInsurance> {
        throw new Error("Method not implemented.");
    }
}

export { HealthInsurancesRepository }