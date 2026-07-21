import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BicicletaModel } from './bicicleta.model';
import { InjectRepository } from '@nestjs/typeorm';
import { ModeloService } from 'src/modelo/modelo.service';
import { EstacoesService } from 'src/estacoes/estacoes.service';
import { BicicletaRequestDto } from './dto/bicicleta_request.dto';

@Injectable()
export class BicicletaService {

    constructor(
        @InjectRepository(BicicletaModel)
        private readonly bicicletaRepository: Repository<BicicletaModel>,
        private readonly modeloService: ModeloService,
        private readonly estacaoService: EstacoesService
    ){}

    async addBicicleta(request: BicicletaRequestDto): Promise<void> {
        const modelo = await this.modeloService
            .carregarModeloPeloId(request.modeloId)
        const lotacao = await this.estacaoService
            .buscarEstacaoPorId(request.estacaoId)
        
        // validar a quantidade de bicicleta na estação
        // caso a quantidade exceda a capacidade lançar um exeção
        // criar o objeto de bicicleta
        const bicicleta = this.bicicletaRepository.create({
            modelo,
            lotacao
        })


        // salvar bicicleta
        await this.bicicletaRepository.save(bicicleta)
    }
}
