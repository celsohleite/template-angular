import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
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
import { PainelComponent } from './dashboard/painel.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//chart
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartsModule } from 'ng2-charts';
import { NgxGaugeModule } from 'ngx-gauge';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    CadastroEmpresaComponent,
    CadastroPrestadorComponent,
    CadastroClienteComponent,
    
    ConsultaUsuarioComponent,
    ConsultaEmpresaComponent,
    ConsultaPrestadorComponent,
    ConsultaClienteComponent,
    ChartComponent,
    PainelComponent

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule,
    MatGridListModule,
    MatListModule,
    AppRoutingModule,
    MatDialogModule,
    MatRadioModule,
    Ng2GoogleChartsModule,
    ChartsModule,
    NgxGaugeModule
    
  ],

  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],

  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule {  
}
