import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabelaComponent } from './tabela.component';
import { Tabela2Component } from './tabela2/tabela2.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TabelaRoutingModule } from './tabela-routing.module';



import { MatTableModule } from '@angular/material/table'; 
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    TabelaComponent,
    DialogComponent,
    Tabela2Component
  ],
  imports: [
    CommonModule,
    TabelaRoutingModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule
  ],
  exports:[TabelaComponent,DialogComponent,Tabela2Component],
  providers: [
   { provide: MAT_DIALOG_DATA, useValue: {} },
   { provide: MatDialogRef, useValue: {} },
   //{ provide:ELEMENTDATAService, useValue:{}}
  ],


})

export class TabelaModule { }