import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // menu: any[] = [];

  menu: any = [
    {
      titulo: 'Aspectos Generales de la Química',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Definición & Áreas de la Química', url: '/dashboard'},
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' },
        { titulo: 'Promesas', url: '/promesas' },
        { titulo: 'Rxjs', url: '/rxjs' }
      ]
    },
    {
      titulo: 'Aspecto N2',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios' },
        { titulo: 'Hospitales', url: '/hospitales' },
        { titulo: 'Medicos', url: '/medicos' }
      ]
    },
    {
      titulo: 'Aspecto N3',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios' },
        { titulo: 'Hospitales', url: '/hospitales' },
        { titulo: 'Medicos', url: '/medicos' }
      ]
    }
  ];

  constructor(public _usuarioService: UsuarioService) { }

  cargarMenu() {
    this.menu = this.menu;
    // this.menu = this._usuarioService.menu;
  }
}
