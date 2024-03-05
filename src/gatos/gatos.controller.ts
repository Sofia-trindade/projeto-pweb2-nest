import { Controller, Delete, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response, response } from 'express';
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
    findOne(@Param('id')id: string,@Res() response: Response){
        const gato = this.gatos.find((gato)=> gato.id === Number(id));
        if(gato){
            response.status(HttpStatus.OK).json(gato);
        }else{
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }
    @Delete(':id')
    delete(@Param('id')id: string,@Res() response:Response){
        const index = this.gatos.findIndex((gato) => gato.id === Number(id));
        if(index >= 0){
            this.gatos.splice(index, 1);
            response.status(HttpStatus.NO_CONTENT).send();
        }else{
            response.status(HttpStatus.NOT_FOUND).send();
        }

    }
}
