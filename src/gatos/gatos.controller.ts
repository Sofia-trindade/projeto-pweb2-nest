import { Controller, Get, Param } from '@nestjs/common';
import { Gato } from 'src/gato/gato.interface';

@Controller('gatos')
export class GatosController {

    private readonly gatos:Gato[]=[
        {   
            id: 1,
            nome: 'pink',
            raca: 'vira lata',
            idade: 5
        },
        {   
            id: 2,
            nome: 'Black',
            raca: 'vira lata',
            idade: 1
        }
    ];

    @Get()
    findALL(): Gato[]{
        return this.gatos;
    }

    @Get(':id')
    findOne(@Param('id')id: string):Gato | undefined {
        return this.gatos.find((gato)=> gato.id === Number(id));
    }
}
