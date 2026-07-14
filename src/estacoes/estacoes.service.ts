import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EstacaoModel } from './estacao.model';
import { InjectRepository } from '@nestjs/typeorm';
import { EstacaoRequestDto } from './dto/estacao_request.dto';

@Injectable()
export class EstacoesService {

    constructor(
        @InjectRepository(EstacaoModel)
        private readonly estacaoRepository = Repository<EstacaoModel>
    ){}

    async addEstacao(request: EstacaoRequestDto): Promise<void> {
        const estacaoExiste = await this.estacaoRepository.findOne({
            where: {
                nomeEstacao: request.nomeEstacao
            }
        })
    }
}
