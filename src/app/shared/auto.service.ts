import { Injectable } from '@angular/core';
import { Auto } from '../auto';
import { AUTOS } from '../misautos';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  private autos:Auto[] = AUTOS;

  constructor() { }

  getAutos(): Auto[] {
    return this.autos;
  }

  getUnAuto(posicion:number):Auto{
    return this.autos[posicion];
  }
}
