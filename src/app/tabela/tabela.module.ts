import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabelaComponent } from './tabela.component';
import { DialogComponent } from './dialog/dialog.component';


import { MatTableModule } from '@angular/material/table'; 
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TabelaComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  exports:[TabelaComponent,DialogComponent],
  providers: [
   { provide: MAT_DIALOG_DATA, useValue: {} },
   { provide: MatDialogRef, useValue: {} }],
})

export class TabelaModule { }
