import { Component, NgModule, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { NgForm } from '@angular/forms';

@Component({
    moduleId : module.id,
    selector : 'app-usuario-cadastro',
    templateUrl : './cadastro-usuario.component.html',
    styleUrls : ['./cadastro-usuario.component.css'],
})

@NgModule({
    imports : []
})

export class CadastroUsuarioComponent implements OnInit{
    
    usuario:Usuario;
    
    constructor(){}
    
    ngOnInit(){}
}