import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componentes
// import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
// import { HospitalesComponent } from './hospitales/hospitales.component';
// import { MedicosComponent } from './medicos/medicos.component';
// import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    PipesModule,
    CommonModule
  ],
  declarations: [
    // PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent,
    UsuariosComponent,
    // ModalUploadComponent,
    // HospitalesComponent,
    // MedicosComponent,
    // MedicoComponent,
    BusquedaComponent
  ],
  providers: [],
  exports: [
    // PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ]
})
export class PagesModule { }
