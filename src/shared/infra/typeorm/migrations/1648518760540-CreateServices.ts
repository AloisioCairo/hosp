import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateServices1648518760540 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"services",
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
                        name: "code",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "type",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "table_id",
                        type: "uuid",
                    },
                    {
                        name: "active",
                        type: "boolean",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKUserCreatedHeanthInsurance",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_created_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKUserAlteredHeanthInsurance",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_altered_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKServicesTable",
                        referencedTableName: "tables",
                        referencedColumnNames: ["id"],
                        columnNames: ["table_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("services");
    }

}
