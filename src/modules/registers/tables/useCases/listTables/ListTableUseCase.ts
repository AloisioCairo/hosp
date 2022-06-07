import { inject, injectable } from "tsyringe";

import { Table } from "../../infra/entities/Table";
import { ITableRepository } from "../../repositories/ITableRepository";

@injectable()
class ListTableUseCase {
    constructor(
        @inject("TablesRepository")
        private tableRepository: ITableRepository)
    {}

    async execute(): Promise<Table[]> {
        const table = await this.tableRepository.list();

        return table;
    }
}

export { ListTableUseCase }