import { Controller, Get, Post } from '@nestjs/common';
import { EstacoesService } from './estacoes.service';
import { EstacaoModel } from './estacao.model';

@Controller('estacoes')
export class EstacoesController {

    constructor(
        private readonly estacoeService: EstacoesService
    ){}

    @Post()
    async cadastrarEstacoes():Promise<void> {}

    @Get()
    async carregarEstacoes(): Promise<EstacaoModel[] | null>  {
        return null
    }
}
