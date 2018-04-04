import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//rotas
import { LoginComponent } from './acesso/login.component';
import { HomeComponent } from './home/home.component';

import { ConsultaUsuarioComponent } from './content/content-consulta-usuario.component';
import { ConsultaEmpresaComponent } from './content/content-consulta-empresa.component';
import { ConsultaPrestadorComponent } from './content/content-consulta-prestador.component';
import { ConsultaClienteComponent } from './content/content-consulta-cliente.component';

import { CadastroUsuarioComponent } from './modal/cadastro-usuario.component';
import { CadastroEmpresaComponent } from './modal/cadastro-empresa.component';
import { CadastroPrestadorComponent } from './modal/cadastro-prestador.component';
import { CadastroClienteComponent } from './modal/cadastro-cliente.component';

import { ChartComponent } from './modal/chart.component';

import { Route } from '@angular/compiler/src/core';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  
  { path: 'consulta_empresa', component: ConsultaEmpresaComponent },
  { path: 'consulta_usuario', component: ConsultaUsuarioComponent },
  { path: 'consulta_prestador', component: ConsultaPrestadorComponent },
  { path: 'consulta_cliente', component: ConsultaClienteComponent },
  
  { path: 'modal_usuario', component: CadastroUsuarioComponent, outlet: 'usuarioPopup'  },
  { path: 'modal_empresa', component: CadastroEmpresaComponent, outlet: 'empresaPopup'  },
  { path: 'modal_prestador', component: CadastroPrestadorComponent, outlet: 'prestadorPopup'  },
  { path: 'modal_cliente', component: CadastroClienteComponent, outlet: 'clientePopup'  },

  { path: 'modal_chart', component: ChartComponent },


  

  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    CommonModule,
    LoginComponent,
    
    CadastroUsuarioComponent, 
    CadastroEmpresaComponent,
    CadastroPrestadorComponent,
    CadastroClienteComponent,
  
    ConsultaUsuarioComponent,  
    CadastroEmpresaComponent,
    CadastroPrestadorComponent,
    
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    
  ]
})

export class AppRoutingModule {}