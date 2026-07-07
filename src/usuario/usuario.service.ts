import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioRequestDto } from './dto/usuario_request.dto';

@Injectable()
export class UsuarioService {
    private usuarios = [
        {
            nome: "Carlos Oliveira", 
            email: 'coliveira@mail.com', 
            contato: '+5586999667788'
        },
        {
            nome: "Sara Alves", 
            email: 'salves@mail.com', 
            contato: '+5586999669988'
        },
    ]

    todosUsuarios() {
        return this.usuarios
    }

    buscarUsuarioPorEmail(email:string){
        const usuario = this.usuarios
            .find(u => u.email === email)
        if(!usuario) 
            throw new NotFoundException("Usuário não encontrado")    
        return usuario
    }

    novoUsuario(request: UsuarioRequestDto){
        const usuario = this.usuarios.find(u => u.email === request.email)
        if(usuario) throw new BadRequestException("Usuario já cadastrado")
        this.usuarios.push(request)
    }
}
