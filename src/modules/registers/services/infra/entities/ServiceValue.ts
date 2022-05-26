import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { User } from "../../../accounts/infra/entities/User";
import { HealthInsurance } from "../../../healthInsurances/infra/entities/HealthInsurance";
import { Service } from "./Service";

// Entidade para armazenar por convênio, os valores dos serviços
@Entity("service_values")
class ServiceValue {

    @PrimaryColumn()
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_created_id" })
    user_created_at: User;

    @UpdateDateColumn()
    altered_at: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_altered_id" })
    user_altered_at: User;

    @ManyToOne(() => Service)
    @JoinColumn({ name: "service_id" })
    service: Service;

    @ManyToOne(() => HealthInsurance)
    @JoinColumn({ name: "health_insurance_id" })
    healthInsurance: HealthInsurance;

    // Data em que foi liberado cobrar o valor
    @Column()
    billing_date: Date;

    @Column()
    value: number;

    @Column()
    active: boolean;
    
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.active = true;
        }           
    }
}

export { ServiceValue }