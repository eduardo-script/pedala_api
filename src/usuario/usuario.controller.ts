import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioRequestDto } from './dto/usuario_request.dto';

@Controller('usuarios')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){}

    //http://localhost:3000/usuarios/
    @Get()
    carregarUsuarios() {
        return this.usuarioService.todosUsuarios()
    }

    //http://localhost:3000/usuarios/buscar/jose@mail.com
    @Get("/buscar/:email")
    carregarUsuarioPorEmail(@Param("email") email:string) {
        return this.usuarioService.buscarUsuarioPorEmail(email)
    }

    //http://localhost:3000/usuarios/consultar?email=jose@mail.com
    @Get("/consultar")
    carregarUsuarioPorQuery(@Query("email") email:string) {
        return this.usuarioService.buscarUsuarioPorEmail(email)
    }

    //http://localhost:3000/usuarios
    @Post()
    addUsuario(@Body() request: UsuarioRequestDto){
        this.usuarioService.novoUsuario(request)
    }
}
