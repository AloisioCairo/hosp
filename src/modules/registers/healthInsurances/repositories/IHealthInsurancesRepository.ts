import { IHealthInsurancesDTO } from "../dto/IHealthInsurancesDTO";
import { HealthInsurance } from "../infra/entities/HealthInsurance";

interface IHealthInsurancesRepository {
    findByEmail(email: string): Promise<HealthInsurance>;
    list(): Promise<HealthInsurance[]>;
    create(data : IHealthInsurancesDTO): Promise<HealthInsurance>;
}

export { IHealthInsurancesRepository }