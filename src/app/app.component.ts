import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  valorEmprestimo: number;
  taxaJuros: number;
  qtdeParcelas: number;
  valorFinal: number;
  valorParcela: number;

  simularEmprestimo() {
    this.valorFinal = this.valorEmprestimo + this.valorEmprestimo * (this.taxaJuros / 100);
    this.valorParcela = this.valorFinal / this.qtdeParcelas;
  }

  constructor() {}

  ionViewDidEnter() {}
}
