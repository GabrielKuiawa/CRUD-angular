import { Component, OnInit } from '@angular/core';

import { ELEMENTDATAService } from 'src/app/shared/element-data.service'

@Component({
  selector: 'app-tabela2',
  templateUrl: './tabela2.component.html',
  styleUrls: ['./tabela2.component.css']
})
export class Tabela2Component implements OnInit {

  total!:number;
  totalPorcentagem!:number;
  marcados!:number;

  displayedColumns: string[] = ['checkbox','adicionar', 'quantidade','preço','valor'];

  constructor(public service:ELEMENTDATAService ) { }
 
 
  calcular(){
    this.total = 0;
    for(let i = 0; i < this.service.ELEMENT_DATA.length; i++){
    let produto = this.service.ELEMENT_DATA[i];
    produto.valor = produto.quantidade * produto.preco || 0;
    this.total=this.total + produto.valor;
    }
    return this.total
  }
  calculoPorcentagem(){
    this.totalPorcentagem = this.service.ELEMENT_DATA.length;
     this.marcados = 0;
    for(let i = 0; i < this.service.ELEMENT_DATA.length; i++ ){
    let produto = this.service.ELEMENT_DATA[i];
     if(produto.checkbox){
      this.marcados++;
     }
    }
    return(this.marcados / this.totalPorcentagem)*100;
  }

  ngOnInit(): void {
  }

}
