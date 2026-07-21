import { Body, Controller, Post } from '@nestjs/common';
import { BicicletaService } from './bicicleta.service';
import { BicicletaRequestDto } from './dto/bicicleta_request.dto';

@Controller('bicicletas')
export class BicicletaController {

    constructor(
        private readonly bicicletaService: BicicletaService
    ){}

    @Post()
    async cadastrarBicicleta(@Body() request: BicicletaRequestDto):Promise<void> {
        await this.bicicletaService.addBicicleta(request)
    }
}



