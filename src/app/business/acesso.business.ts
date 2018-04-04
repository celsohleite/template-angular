import { NgModule, Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';

@NgModule({
    imports: []
})
@Component({
})
export class AcessoBusiness implements OnInit{

    result: any;
    user: Usuario;
    res: any;

    constructor(private http: HttpClient) { }
        
    ngOnInit(){}

    validaUsuario(retorno: string) {
        console.log("fora do get : " + retorno);
    }

    restUsuario() {
        this.res = this.http.get<any>('http://localhost:8098/api/cliente').subscribe(data => {
            this.result = data['result'];         
            this.validaUsuario(data.ip);
            console.log("retorno do ip : " + data.ip);
        },error =>{
            console.log("error ");
        });
    }

    
}