import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateServiceValues1648519444916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"service_values",
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
                        name: "service_id",
                        type: "uuid",
                    },
                    {
                        name: "health_insurance_id",
                        type: "uuid",
                    },
                    {
                        name: "billing_date",
                        type: "timestamp",
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
                        name: "FKServiceValuesService",
                        referencedTableName: "services",
                        referencedColumnNames: ["id"],
                        columnNames: ["service_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKServiceValuesHealthInsurance",
                        referencedTableName: "health_insurances",
                        referencedColumnNames: ["id"],
                        columnNames: ["health_insurance_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("service_values");
    }

}
