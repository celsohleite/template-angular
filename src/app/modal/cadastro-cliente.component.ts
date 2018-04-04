import { Component, NgModule, OnInit, Input, AfterViewInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'app-cadastro-cliente',
    templateUrl: './cadastro-cliente.component.html',
    styleUrls: ['./cadastro-cliente.component.css'],
    inputs : ['cliente']
})
@NgModule({
    imports: []
})
export class CadastroClienteComponent implements OnInit{
  
    @Input()
    cliente:Cliente;

    constructor(){}

    ngOnInit() {}

    ngAfterViewInit(){
        this.cliente;
    }
}
