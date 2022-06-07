import { ITableDTO } from "../../infra/dto/ITableDTO";
import { Table } from "../../infra/entities/Table";
import { ITableRepository } from "../ITableRepository";

class TablesRepositoryInMemory implements ITableRepository {
    tables: Table[] = [];

    async list(): Promise<Table[]> {
        throw new Error("Method not implemented.");
    }
    
    async create({ name, active}: ITableDTO): Promise<Table> {
        const table = new Table();

        Object.assign(table, { name, active });

        this.tables.push(table);

        return table;
    }
}

export { TablesRepositoryInMemory }