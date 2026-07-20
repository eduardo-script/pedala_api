import { IsEnum, IsNotEmpty, IsOptional } from "class-validator"
import { Situacao } from "../situacao.enun"

export class BicicletaRequestDto {
    
    @IsNotEmpty({ message: "Campo Modelo é obrigatório"})
    modeloId:string

    @IsNotEmpty({ message: "Campo Estação é obrigatório"})
    estacaoId: string

    @IsOptional()
    @IsEnum(Situacao)
    situacao: Situacao
}