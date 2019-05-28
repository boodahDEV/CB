import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    /** Callback de un observable */
    this.subscription = this.regresaObservable().subscribe(
      numero => console.log('Subs: ', numero),        /** Next() */
      error => console.log('Error en el obs ', error), /** Error  */
      () => console.log('El observable termino!')     /** Termino el observable */
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('la pagina se va a cerrar!.');
    this.subscription.unsubscribe();
    //throw new Error("Method not implemented.");
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {

      let contador = 0;

      let intervalo = setInterval(() => {

        contador++;
        const salida = {
          valor: contador
        };
        observer.next(salida);

        // if(contador === 3 ){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if(contador === 2){
        //   // clearInterval(intervalo);
        //   observer.error('Auxilio');
        // }

      }, 1000);

    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        //console.log('Filter: ',valor,index);
        if ((valor % 2) === 1) {
          //impar
          return true;
        } else {
          //par
          return false;
        }
        return true;
      })
    );

  }

}
