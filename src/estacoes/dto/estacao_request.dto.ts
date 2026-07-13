import { IsBoolean,IsNotEmpty, IsNumber, MinLength } from "class-validator"

export class EstacaoRequestDto {
    
    @IsNotEmpty()
    @MinLength(6)
    nomeEstacao:string

    @IsNumber()
    @IsNotEmpty()
    capacidade: number

    @IsBoolean()
    ativa: boolean
}