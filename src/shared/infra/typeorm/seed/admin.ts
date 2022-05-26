import { v4 as uuidV4 } from "uuid";
import { hash } from "bcrypt";

import createConnection from "../index";

async function create() {

    const connection = await createConnection("localhost");

    const id = uuidV4();
    const password = await hash("admin", 8);

    await connection.query(`INSERT INTO users (id, created_at, user_created_id, name, email, password, "admin", active)
    VALUES ('${id}', 'now()', '${id}', 'admin', 'admin@hosp.com.br', '${password}', true, true)`);

    await connection.close;
}

create().then(() => console.log("User admin created."));