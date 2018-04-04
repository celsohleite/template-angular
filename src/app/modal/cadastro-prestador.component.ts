import { Component, NgModule,OnInit } from '@angular/core';
import { Prestador } from '../model/prestador';
import { NgForm } from '@angular/forms';


@Component({
    moduleId : module.id,
    selector : 'app-prestador-cadastro',
    templateUrl : './cadastro-prestador.component.html',
    styleUrls : ['./cadastro-prestador.component.css']
})

@NgModule({
  imports : []
})

export class CadastroPrestadorComponent implements OnInit{
 
  prestador:Prestador;

  constructor(){}
  
  ngOnInit(){}
}