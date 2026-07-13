import { Body, Controller, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioRequestDto } from './dto/usuario_request.dto';
import { UsuarioEditarRequestDto } from './dto/usuario_editar_request.dto';

@Controller('usuarios')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){}

    //http://localhost:3000/usuarios
    @Get()
    carregarUsuarios() {
        return this.usuarioService.carregarTodosUsuarios()
    }

    //http://localhost:3000/usuarios/buscar/jose@mail.com
    @Get("/buscar/:email")
    carregarUsuarioPorEmail(@Param("email") email:string) {
        return this.usuarioService.buscarUsuarioPorEmail(email)
    }

    //http://localhost:3000/usuarios/consultar?email=jose@mail.com
    @Get("/consultar")
    async carregarUsuarioPorQuery(@Query("email") email:string) {
        return await this.usuarioService.buscarEmailUsandoPorPalavra(email)
    }

    //http://localhost:3000/usuarios
    @Post()
    async addUsuario(@Body() request: UsuarioRequestDto):Promise<void> {
        await this.usuarioService.novoUsuario(request)
    }
    // http://localhost:3000/usuarios/editar/erqrwer9542-35-3425    
    @Put("/editar/:id")
    @HttpCode(204)
    async editarUsuarioCadastrado(@Param("id") idUsuario: string, 
        @Body() request: UsuarioEditarRequestDto):Promise<void>{
            await this.usuarioService.atualizarUsuario(idUsuario, request)
    }
}
