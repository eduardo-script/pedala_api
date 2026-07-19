import { EstacaoModel } from "src/estacoes/estacao.model"
import { ModeloModel } from "src/modelo/modelo.model"
import { Situacao } from "./situacao.enun"
import { Column, CreateDateColumn, Entity, JoinColumn, 
    ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("bicicletas")
export class BicicletaModel {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => ModeloModel)
    @JoinColumn({ name: "modelo_id"})
    modelo: ModeloModel

    @ManyToOne(() => EstacaoModel)
    @JoinColumn({ name: "estacao_id"})
    lotacao: EstacaoModel

    @Column({ 
        type: 'enum',
        enum: Situacao, 
        default: Situacao.DISPONIVEL,
    })
    situacao: Situacao

    @CreateDateColumn({name: "dt_cadastro", update: false})
    dataCadastro: Date

    @UpdateDateColumn({name: "dt_atualizado", update: true})
    dataAtualizado: Date
}