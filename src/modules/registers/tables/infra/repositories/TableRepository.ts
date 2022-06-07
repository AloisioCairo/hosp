import { getRepository, Repository } from "typeorm";
import { ITableRepository } from "../../repositories/ITableRepository";
import { ITableDTO } from "../dto/ITableDTO";
import { Table } from "../entities/Table";

class TableRepository implements ITableRepository {
    private repository: Repository<Table>;

    constructor () {
        this.repository = getRepository(Table);
    }

    async list(): Promise<Table[]> {
        const tables = await this.repository.find();

        return tables;
    }

    async create(data: ITableDTO): Promise<Table> {
        const table = this.repository.create(data);
        
        await this.repository.save(table);

        return table;
    }
}

export { TableRepository }