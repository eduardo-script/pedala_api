import { IsEmail, IsNotEmpty, IsPhoneNumber, min, MIN_LENGTH, MinLength, ValidationArguments } from "class-validator"

export class UsuarioRequestDto {

    @IsNotEmpty({message: "Campo nome é obrigatório"})
    @MinLength(6, {
    message: (args: ValidationArguments) =>
      `O campo '${args.property}' deve conter no mínimo 
        ${args.constraints[0]} caracteres.`,
    })
    nome: string

    @IsNotEmpty({message: "Campo email é obrigatório"})
    @IsEmail({},{message: "Informe um e-mail válido."})
    email: string

    @IsNotEmpty({message: "Campo telefone é obrigatório"})
    @IsPhoneNumber('BR', {message: "Informe um telefone válido"})
    telefone: string
}