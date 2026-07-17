import { IsNotEmpty } from "class-validator"

export class ModeloRequestDto {
    
    @IsNotEmpty({ message: "Nome do modelo é obrigatório"})
    nome: string

    @IsNotEmpty({message: "Marca é obrigatória"})
    marcaId: string
}