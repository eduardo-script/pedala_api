import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { MarcaModel } from './marca.model';

@Controller('marcas')
export class MarcaController {
    constructor(
        private readonly marcaService: MarcaService
    ){}

    @Post()
    async addMarca(@Body() data: {nome: string, url: string})
        :Promise<void> {
        await this.marcaService.addMarca(data)
    }

    @Get()
    async carregarMarcas():Promise<MarcaModel[]>{
        return await this.marcaService.carregarMarcas()
    }

    @Put("/editar/:id")
    @HttpCode(204)
    async editarMarca(@Param("id") idMarca: string, 
        @Body() data: {nome: string, url: string})
        :Promise<void> {
            await this.marcaService.atualizarMarca(idMarca, data)
    }
    
    @Delete("/remover/:id")
    @HttpCode(204)
    async removerMarca(@Param("id") idMarca: string):Promise<void> {
        await this.marcaService.removerMarca(idMarca)
    }
}
