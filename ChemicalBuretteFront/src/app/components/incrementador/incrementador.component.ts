import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() {
    // console.log('Leyenda: ',this.leyenda);
    // console.log('Progreso: ',this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda: ',this.leyenda);
    // console.log('Progreso: ',this.progreso);
  }

  onChange(newValue: number){
    // let elemHTML: any = document.getElementsByName('progreso');

    if(newValue >= 100){
      this.progreso = 100;
    }else if(newValue <= 0){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;
    this.txtProgress.nativeElement.focus();
    //console.log('elemHTML.value::::',elemHTML.value);
    this.cambioValor.emit(this.progreso);
    // console.log('txtProgress::::',this.txtProgress);
    //
    // console.log('newValue::::',newValue);
  }

  cambiarValor(valor: number){
    if(this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      return;
    }else if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    console.log(this.progreso);
  }

}
