import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

import {
  SharedService,
  SettingsService,
  SidebarService,
  UsuarioService,
  LoginGuardGuard,
  AdminGuard,
  // HospitalService,
  // MedicoService,
  VerificaTokenGuard
} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SharedService,
    SettingsService,
    SidebarService,
    UsuarioService,
    LoginGuardGuard,
    AdminGuard,
    ModalUploadService,
    // HospitalService,
    // MedicoService,
    VerificaTokenGuard
  ]
})
export class ServiceModule { }
