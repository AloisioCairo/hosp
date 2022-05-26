import { Router } from "express";

import { CreateUserController } from "../../../../modules/registers/accounts/useCases/createUser/CreateUserController";
import { ListUsersController } from "../../../../modules/registers/accounts/useCases/listUsers/ListUsersController";

const usersRoutes = Router();

const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();

usersRoutes.get("/", listUsersController.handle);
usersRoutes.post("/", createUserController.handle);

export { usersRoutes }