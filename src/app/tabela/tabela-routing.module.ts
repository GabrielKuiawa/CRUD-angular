import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from 'src/app/pagina1/pagina1.component';
import { Pagina2Component } from 'src/app/pagina2/pagina2.component';


const routes2: Routes = [
  { path: '', component: Pagina1Component },
  { path: 'proximaPagina', component: Pagina2Component },


];

@NgModule({
  imports: [RouterModule.forRoot(routes2)],
  exports: [RouterModule]
})
export class TabelaRoutingModule { }
