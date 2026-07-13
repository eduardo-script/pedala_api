import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioRequestDto } from './dto/usuario_request.dto';
import { ILike, Repository } from 'typeorm';
import { UsuarioModel } from './usuario.model';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEditarRequestDto } from './dto/usuario_editar_request.dto';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioModel)
        private readonly usuarioRepository: Repository<UsuarioModel>
    ){}

    async novoUsuario(request: UsuarioRequestDto):Promise<void> {
        const existeUsuario = await this.usuarioRepository.findOne({
            where: {
                email: request.email
            }
        })
        if(existeUsuario) throw new BadRequestException('Usuário ja cadastrado')
        await this.usuarioRepository.save(request)
    }

    async carregarTodosUsuarios():Promise<UsuarioModel[]> {
        return await this.usuarioRepository.find()
    }

    async buscarUsuarioPorEmail(email: string): Promise<UsuarioModel | null> {
        return await this.usuarioRepository.findOneBy({email})
    } 

    async atualizarUsuario(id: string, request: UsuarioEditarRequestDto)
        :Promise<void> {
       await this.usuarioRepository.update(id, request)
    }

    async buscarEmailUsandoPorPalavra(query:string)
            :Promise<UsuarioModel[]>{
        const result = await this.usuarioRepository.find({
            where: {
                email: ILike('%'+query+'%')
            }
        })
        console.log(result)
        return result
    }
}
