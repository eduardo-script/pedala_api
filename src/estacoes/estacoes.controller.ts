import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { EstacoesService } from './estacoes.service';
import { EstacaoModel } from './estacao.model';
import { EstacaoRequestDto } from './dto/estacao_request.dto';

@Controller('estacoes')
export class EstacoesController {

    constructor(
        private readonly estacoeService: EstacoesService
    ){}

    @Post()
    async cadastrarEstacoes(@Body() request: EstacaoRequestDto):Promise<void> {
        await this.estacoeService.addEstacao(request)
    }

    @Get()
    async carregarEstacoes(@Query("nome") nome:string): 
            Promise<EstacaoModel[]>  {
        let estacoes

        if (nome) {
            estacoes = await 
                this.estacoeService.buscarEstacaoUsandoParteDoNome(nome)
        } else {
            estacoes = await this.estacoeService.carregarEstacoes() 
        }

        return estacoes
    }
}
