import { TablesRepositoryInMemory } from "../../repositories/in-memory/TablesRepositoryInMemory";
import { CreateTableUseCase } from "./CreateTableUseCase"

let createTableUseCase: CreateTableUseCase;
let tablesRepositoryInMemory: TablesRepositoryInMemory;

describe("Create table", ()=> {
    beforeEach(() => {
        tablesRepositoryInMemory = new TablesRepositoryInMemory();
        createTableUseCase = new CreateTableUseCase(tablesRepositoryInMemory);
    })

    it("should be able to create a new table", async() => {
        const table = await createTableUseCase.execute({
            name: "TUSS",
            active: true
        })

        expect(table).toHaveProperty("id");
    })
})