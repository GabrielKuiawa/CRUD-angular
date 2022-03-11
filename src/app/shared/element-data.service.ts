import { Injectable } from '@angular/core';
import { PeriodicElement } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ELEMENTDATAService {


 ELEMENT_DATA: PeriodicElement[] = [];
 

  constructor() { }

}
