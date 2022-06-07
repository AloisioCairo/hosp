import { Table } from "../infra/entities/Table"
import { ITableDTO } from "../infra/dto/ITableDTO"

interface ITableRepository {
    list(): Promise<Table[]>;
    create(data: ITableDTO): Promise<Table>;
}

export { ITableRepository }