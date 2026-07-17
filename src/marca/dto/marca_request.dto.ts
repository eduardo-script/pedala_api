import { IsNotEmpty, IsOptional } from "class-validator"

export class MarcaRequestDto {
    
    @IsNotEmpty({ message: "O campo nome modelo é obrigatório"})
    nome: string

    @IsOptional()
    url: string
}