import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class MarcaRequestDto {
  @IsNotEmpty({ message: 'O nome da marca não pode ser vazio' })
  @MinLength(2, { message: 'O nome da marca deve ter no mínimo 2 caracteres' })
  nome: string;

  @IsOptional()
  @IsString()
  urlImagem?: string; // <-- ADICIONE ESTA LINHA AQUI!
}