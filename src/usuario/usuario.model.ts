import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("usuarios")
export class UsuarioModel {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    telefone: string

    @CreateDateColumn({name: "dt_criacao"})
    dataCriacao: Date
}