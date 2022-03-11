import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabelaComponent } from './tabela.component';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { ELEMENTDATAService } from 'src/app/shared/element-data.service'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 



import { MatTableModule } from '@angular/material/table'; 
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { TabelaRoutingModule } from './tabela-routing.module';
import { Tabela2Component } from './tabela2/tabela2.component';



@NgModule({
  declarations: [
    TabelaComponent,
    DialogComponent,
    HomeComponent,
    FooterComponent,
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
    FormsModule
  ],
  exports:[TabelaComponent,DialogComponent,Tabela2Component],
  providers: [
   { provide: MAT_DIALOG_DATA, useValue: {} },
   { provide: MatDialogRef, useValue: {} },
   { provide:ELEMENTDATAService, useValue:{}}],


})

export class TabelaModule { }