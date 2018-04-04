import { Component, NgModule } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

@NgModule({
    imports: [

    ]
})

export class HomeComponent {
    cadastros = [
        {
            name: 'Empresa',
            updated: new Date(),
            link : '/consulta_empresa',
            icon : 'home'
        },
        {
            name: 'Usuário',
            updated: new Date(),
            link : '/consulta_usuario',
            icon : 'people'
        },
        {
            name: 'Prestador',
            updated: new Date(),
            link : '/consulta_prestador',
            icon : 'people'
        },
        {
            name: 'Cliente',
            updated: new Date(),
            link : '/consulta_cliente',
            icon : 'people'
        },
        {
            name: 'Grafico',
            updated: new Date(),
            link : '/modal_chart',
            icon : 'people'
        }
    ];
    notes = [
        {
            name: 'Vacation Itinerary',
            updated: new Date('2/20/16'),
        },
        {
            name: 'Kitchen Remodel',
            updated: new Date('1/18/16'),
        }
    ];
}