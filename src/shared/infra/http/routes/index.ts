import { Router } from "express";

import { healthInsurancesRoutes } from "./healthInsurances.route";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/healthInsurances", healthInsurancesRoutes);
router.use("/users", usersRoutes);

export { router }