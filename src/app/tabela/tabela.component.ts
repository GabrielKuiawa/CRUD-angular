import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  editar: number;
  delete: string;
}


const ELEMENT_DATA: PeriodicElement[] = [];


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  @ViewChild(MatTable)
  table!:MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'editar', 'delete'];
  dataSource = ELEMENT_DATA;
 
  

  constructor(public dialog: MatDialog) { }


  openDialog(element:PeriodicElement | null): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: element === null ? {
        position:null,
        name:'',
        editar:null,
        delete:''
      }:element
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result !== undefined){
       this.dataSource.push(result);
       //editar
       //this.dataSource[indice] = result;
       this.table.renderRows();
     }
    });
    
  }
   
  removeData(index:number) {
    this.dataSource.splice(index,1);
    this.table.renderRows();
  }

  ngOnInit(): void {
  }

}
