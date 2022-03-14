import { Component } from '@angular/core';



export interface PeriodicElement {
  quantidade: number;
  adicionar: string;
  preco:number;
  valor: number;
  checkbox:boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loja';
  
}
