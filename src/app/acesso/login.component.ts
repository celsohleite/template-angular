import { Component, NgModule, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { AcessoBusiness } from '../business/acesso.business';

import { HttpClient } from '@angular/common/http';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

@NgModule({
    imports: [
        AcessoBusiness
    ]
})
export class LoginComponent {

    acesso?: AcessoBusiness;
    results: string[];
    user: Usuario;

    constructor(private http: HttpClient) {
        this.acesso = new AcessoBusiness(http);
    }

    doAcesso() {
        this.acesso.restUsuario();
    }
}