import { container } from "tsyringe";
import { UsersRepository } from "../../modules/registers/accounts/infra/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/registers/accounts/repositories/IUsersRepository";
import { HealthInsurancesRepository } from "../../modules/registers/healthInsurances/infra/repositories/HealthInsurancesRepository";
import { IHealthInsurancesRepository } from "../../modules/registers/healthInsurances/repositories/IHealthInsurancesRepository";

container.registerSingleton<IHealthInsurancesRepository>(
    "HealthInsurancesRepository",
    HealthInsurancesRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)