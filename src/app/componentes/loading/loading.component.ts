import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  @Input()
  cargando: boolean = false;
  @Output() cambioDeCargando = new EventEmitter<boolean>();

  cambiarCargandoEnPadre() {
    const nuevoValor = !this.cargando;
    this.cambioDeCargando.emit(nuevoValor);
  }
}
