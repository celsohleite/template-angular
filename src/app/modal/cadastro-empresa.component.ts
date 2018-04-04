import { Component, NgModule, OnInit, Inject } from '@angular/core';
//import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Empresa } from '../model/empresa';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'app-empresa-cadastro',
    templateUrl: './cadastro-empresa.component.html',
    styleUrls: ['./cadastro-empresa.component.css']
})

@NgModule({
    imports: []

})

export class CadastroEmpresaComponent implements OnInit {
    empresa: Empresa;

    constructor(
        /*
        public dialogRef: MatDialogRef<CadastroEmpresaComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
        */
    ) { }

    save(){ }

    ngOnInit() {}

}