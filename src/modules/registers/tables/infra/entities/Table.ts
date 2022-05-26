import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { User } from "../../../accounts/infra/entities/User";

@Entity("tables")
class Table {
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

    @Column()
    name: string;

    @Column()
    active: boolean;
    
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.active = true;
        }           
    }
}

export { Table }