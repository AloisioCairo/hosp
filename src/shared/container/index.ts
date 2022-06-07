import { container } from "tsyringe";

import { UsersRepository } from "../../modules/registers/accounts/infra/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/registers/accounts/repositories/IUsersRepository";
import { TableRepository } from "../../modules/registers/tables/infra/repositories/TableRepository";
import { ITableRepository } from "../../modules/registers/tables/repositories/ITableRepository";
import { HealthInsurancesRepository } from "../../modules/registers/healthInsurances/infra/repositories/HealthInsurancesRepository";
import { IHealthInsurancesRepository } from "../../modules/registers/healthInsurances/repositories/IHealthInsurancesRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<ITableRepository>(
    "TablesRepository",
    TableRepository
)

container.registerSingleton<IHealthInsurancesRepository>(
    "HealthInsurancesRepository",
    HealthInsurancesRepository
)