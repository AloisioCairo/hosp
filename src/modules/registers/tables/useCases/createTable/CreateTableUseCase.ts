import { inject, injectable } from "tsyringe";
import { Table } from "../../infra/entities/Table";
import { ITableRepository } from "../../repositories/ITableRepository";

@injectable()
class CreateTableUseCase {
    constructor (
        @inject("TablesRepository")
        private tableRepository: ITableRepository
    ){}

    async execute({ name, active }): Promise<Table> {

        try {
            const table = await this.tableRepository.create( { name, active } );

            return table;
        } catch (error) {
            throw new Error("Erro ao tentar cadastrar uma nova tabela. " + error);
        }
    }
}

export { CreateTableUseCase }