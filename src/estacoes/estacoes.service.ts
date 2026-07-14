import { BadRequestException, Injectable } from '@nestjs/common';
import { EstacaoModel } from './estacao.model';
import { InjectRepository } from '@nestjs/typeorm';
import { EstacaoRequestDto } from './dto/estacao_request.dto';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class EstacoesService {

    constructor(
        @InjectRepository(EstacaoModel)
        private readonly estacaoRepository: Repository<EstacaoModel>
    ){}

    async addEstacao(request: EstacaoRequestDto): Promise<void> {
        const estacaoExiste = await this.estacaoRepository.findOne({
            where: {
                nomeEstacao: request.nomeEstacao
            }
        })

        if(estacaoExiste) 
            throw new BadRequestException(`Estação ja cadastrado 
                        com este nome ${request.nomeEstacao}`)

        const estacao = this.estacaoRepository.create({
            nomeEstacao: request.nomeEstacao,
            capacidade: request.capacidade,
            ativo: request.ativa
        })        

        await this.estacaoRepository.save(estacao)
    }

    async carregarEstacoes():Promise<EstacaoModel[]> {
        return await this.estacaoRepository.find()
    }

    async buscarEstacaoUsandoParteDoNome(query:string)
    : Promise<EstacaoModel[]>{
        const estacoes = await this.estacaoRepository.find({
            where: {  
                nomeEstacao: ILike(`%${query}%`)
            }
        })
        return estacoes
    }
}
