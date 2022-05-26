import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1648229701895 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "user_created_id",
                        type: "uuid",
                    },
                    {
                        name: "altered_at",
                        type: "timestamp",
                    },
                    {
                        name: "user_altered_id",
                        type: "uuid",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "is_admin",
                        type: "boolean",
                    },
                    {
                        name: "avatar",
                        type: "varchar",
                    },
                    {
                        name: "active",
                        type: "boolean",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
