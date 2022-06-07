import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { tablesRoutes } from "./tables.routes";
import { healthInsurancesRoutes } from "./healthInsurances.route";

const router = Router();

router.use("/users", usersRoutes);
router.use("/tables", tablesRoutes);
router.use("/healthInsurances", healthInsurancesRoutes);

export { router }