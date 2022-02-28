import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TabelaComponent } from './tabela.component';

import { MatTableModule } from '@angular/material/table'; 
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [TabelaComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule
  ],
  exports:[TabelaComponent]
})
export class TabelaModule { }
