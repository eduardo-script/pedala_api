import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModeloModel } from './modelo.model';
import { Repository } from 'typeorm';
import { MarcaService } from 'src/marca/marca.service';

@Injectable()
export class ModeloService {
    constructor(
        @InjectRepository(ModeloModel)
        private readonly modeloRepository: Repository<ModeloModel>,
        private readonly marcaService: MarcaService
    ){}
}
