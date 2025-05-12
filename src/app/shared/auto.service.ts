import { Injectable } from '@angular/core';
import { Auto } from '../auto';
import { AUTOS } from '../misautos';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutoService {


  constructor() { }


  private autos:Auto[] = AUTOS;

  getAutos(): Auto[] {
    return this.autos;
  }

  getUnAuto(posicion:number):Auto{
    return this.autos[posicion];
  }
}
