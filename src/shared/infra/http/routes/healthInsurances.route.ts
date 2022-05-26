import { request, response, Router } from "express";

import { CreateHealthInsurancesController } from "../../../../modules/registers/healthInsurances/useCases/createHealthInsurances/CreateHealthInsurancesController";
import { ListHealthInsurancesController } from "../../../../modules/registers/healthInsurances/useCases/listHealthInsurances/ListHealthInsurancesController";

const healthInsurancesRoutes = Router();

const listHealthInsurancesController = new ListHealthInsurancesController();
const createHealthInsurancesController = new CreateHealthInsurancesController();

healthInsurancesRoutes.get("/", listHealthInsurancesController.handle);
healthInsurancesRoutes.post("/", createHealthInsurancesController.handle);

export { healthInsurancesRoutes }