import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http:HttpClient) { }
  retornar(){
    // return this.http.get("https://segundoparcial2.free.beeceptor.com").pipe(take(1));
    return this.http.get<any>('https://segundoparcial2.free.beeceptor.com');
  }  
}
