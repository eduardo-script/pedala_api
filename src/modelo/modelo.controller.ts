import { Body, Controller, Get, Post } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { ModeloRequestDto } from './dto/modelo_request.dto';
import { ModeloModel } from './modelo.model';

// http://localhost:3000/

@Controller('modelos')
export class ModeloController {
    constructor(
        private readonly modeloService: ModeloService
    ){}

    @Post()
    async cadastrarModelo(@Body() data: ModeloRequestDto): Promise<void> {
        await this.modeloService.addModelo(data)
    }

    @Get()
    async listarModelos(): Promise<ModeloModel[]> {
        return await this.modeloService.carregarModelos()
    }
}
