import { IsOptional, IsPhoneNumber, MinLength, ValidationArguments } from "class-validator"

export class UsuarioEditarRequestDto {
    
    @IsOptional()
    @MinLength(6, {
    message: (args: ValidationArguments) =>
        `O campo '${args.property}' deve conter no mínimo 
        ${args.constraints[0]} caracteres.`,
    })
    nome: string

    @IsOptional()
    @IsPhoneNumber('BR', {message: "Informe um telefone válido"})
    telefone: string
}