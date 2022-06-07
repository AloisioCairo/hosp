import { Router } from "express";
import { CreateTableController } from "../../../../modules/registers/tables/useCases/createTable/createTableController";
import { ListTableController } from "../../../../modules/registers/tables/useCases/listTables/ListTableController";

const tablesRoutes = Router();

const listTableController = new ListTableController();
const createTableController = new CreateTableController();

tablesRoutes.get("/", listTableController.handle);
tablesRoutes.post("/", createTableController.handle);

export { tablesRoutes }