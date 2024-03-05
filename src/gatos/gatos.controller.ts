import { Controller, Get } from '@nestjs/common';
import { Gato } from 'src/gato/gato.interface';

@Controller('gatos')
export class GatosController {

    private readonly gatos:Gato[]=[
        {
            nome: 'pink',
            raca: 'vira lata',
            idade: 5
        },
        {
            nome: 'Black',
            raca: 'vira lata',
            idade: 1
        }
    ];

    @Get()
    findALL(): Gato[]{
        return this.gatos;
    }
}
