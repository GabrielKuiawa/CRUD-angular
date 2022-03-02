import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit(): void {
  }

}
