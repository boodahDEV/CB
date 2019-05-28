import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email: string;

  auth2: any;

  constructor(public router: Router, public _usuarioService: UsuarioService) { }

  ngOnInit() {
    init_plugins();
    // this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  // googleInit() {
  //   gapi.load('auth2', () => {
  //     this.auth2 = gapi.auth2.init({
  //       client_id: '973821069144-450qpcg9j2fog17u378mjdb0j4fambq0.apps.googleusercontent.com',
  //       cookiepolicy: 'single_host_origin',
  //       scope: 'profile email'
  //     });
  //     this.attachSignin(document.getElementById('btnGoogle'));
  //   });
  // }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      let token = googleUser.getAuthResponse().id_token;
      console.log(token);
      this._usuarioService.loginGoogle(token)
        .subscribe(resp => {
          console.log('resp Google: ', resp);
          window.location.href = '#/dashboard';
        });
    })
  }

  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    // this._usuarioService.login(usuario, forma.value.recuerdame)
    //   .subscribe(resp => {
    //     console.log('resp:login:: ', resp);
    //     this.router.navigate(['/dashboard']);
    //   });
    if (usuario.email == 'test1@gmail.com' && usuario.password == '123456') {
      console.log('Starting:login:: ');
      this.router.navigate(['/dashboard']);
    }
    console.log('INGRESANDO!!!', forma.valid);
    console.log(forma.value);
  }

}
