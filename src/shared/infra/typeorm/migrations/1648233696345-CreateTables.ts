import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTables1648233696345 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"tables",
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
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tables");
    }
}