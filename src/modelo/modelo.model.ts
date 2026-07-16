import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { MarcaModel } from "../marca/marca.model"
import { JoinColumn } from "typeorm/browser"

@Entity("modelos")
export class ModeloModel {
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({ name: "nome"})
    nomeModelo:string

    @ManyToOne(() => MarcaModel)
    @JoinColumn({ name: "marca_id"})
    marca:MarcaModel
}