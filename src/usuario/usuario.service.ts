import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioRequestDto } from './dto/usuario_request.dto';
import { Repository } from 'typeorm';
import { UsuarioModel } from './usuario.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioModel)
        private readonly usuarioRepository: Repository<UsuarioModel>
    ){}

    async novoUsuario(request: UsuarioRequestDto):Promise<void> {
        await this.usuarioRepository.save(request)
    }

}
