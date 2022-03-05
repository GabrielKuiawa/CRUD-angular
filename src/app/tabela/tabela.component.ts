import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '', weight: 1, symbol: ''},
  {position: 2, name: '', weight: 2, symbol: ''},
  {position: 3, name: '', weight: 3, symbol: ''},
  {position: 4, name: '', weight: 4, symbol: ''},
  {position: 5, name: '', weight: 5, symbol: ''},
  {position: 6, name: '', weight: 6, symbol: ''},
  {position: 7, name: '', weight: 7, symbol: ''},
  {position: 8, name: '', weight: 8, symbol: ''},
  {position: 9, name: '', weight: 9, symbol: ''},
  {position: 10, name: '', weight: 10, symbol: ''},
];


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  @ViewChild(MatTable)
  table!:MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
 
  

  constructor(public dialog: MatDialog) { }


  openDialog(element:PeriodicElement | null): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: element === null ? {
        position:null,
        name:'',
        weight:null,
        symbol:''
      }:element
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result !== undefined){
       this.dataSource.push(result);
       this.table.renderRows();
     }
    });
  }
  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  ngOnInit(): void {
  }

}
