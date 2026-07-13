import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EstacaoModel } from './estacao.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstacoesService {

    constructor(
        @InjectRepository(EstacaoModel)
        private readonly estacaoRepository = 
            Repository<EstacaoModel>
    ){}

    addEstacao(){}
}
