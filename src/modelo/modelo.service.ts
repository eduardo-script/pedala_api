import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModeloModel } from './modelo.model';
import { Repository } from 'typeorm';
import { MarcaService } from 'src/marca/marca.service';
import { ModeloRequestDto } from './dto/modelo_request.dto';

@Injectable()
export class ModeloService {
    constructor(
        @InjectRepository(ModeloModel)
        private readonly modeloRepository: Repository<ModeloModel>,
        private readonly marcaService: MarcaService
    ){}

    async addModelo(request: ModeloRequestDto):Promise<void>{
        const marca = await this.marcaService
                    .carregarMarcaPorId(request.marcaId)

        const existeModelo = await this.modeloRepository.findOneBy({
            nomeModelo: request.nome
        }) 

        if(existeModelo) 
            throw new BadRequestException("Modelo ja cadastrado")

        const modelo = this.modeloRepository.create({
            marca,
            nomeModelo: request.nome
        })    

        await this.modeloRepository.save(modelo)
    }

    async carregarModelos(): Promise<ModeloModel[]> {
        return await this.modeloRepository.find({
            relations: {
                marca: true
            }
        })
    }
}
