import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    let promesa = new Promise((resolve, reject) => {

      let contador = 0;

      let intervalo = setInterval( () => {
          contador += 1;
          console.log(contador);
          if(contador === 3 ){
            resolve('ok!');
            clearInterval(intervalo);
          }
      },1000);
    });

    promesa.then(
      mensaje => console.log('Then de la PROMESA!, Termino!', mensaje)
    ).catch(error => console.error('Error en la promesa',error));



  }

  ngOnInit() {
  }

   

}
