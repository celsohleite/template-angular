import {Component,NgModule } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { CadastroPrestadorComponent } from '../modal/cadastro-prestador.component'

@Component({
    moduleId : module.id,
    selector : 'app-consulta-prestador',
    templateUrl : 'content-consulta-prestador.component.html',
    styleUrls : ['content-consulta-prestador.component.css']
})

@NgModule({
    imports : []
})

export class ConsultaPrestadorComponent{

    displayedColumns = ['position', 'name', 'weight', 'symbol','status'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

    constructor(public dialog: MatDialog) { }

    openDialog() {
        const dialogRef = this.dialog.open(CadastroPrestadorComponent, {
            height: '550px',
            width: '500px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });

    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
}


export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    status: string;
    icon_del:string;
    icon_alt:string;
    icon_add:string;
}

const ELEMENT_DATA: Element[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add'},
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', status : '', icon_del : 'delete', icon_alt : 'edit', icon_add : 'add' },
];