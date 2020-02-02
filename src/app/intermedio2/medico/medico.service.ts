import { Injectable } from '@angular/core';

// Peticiones Htpp
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(
    public http: HttpClient // inyección del servicio
  ) { }


  getMedicos(){
    return this.http.get('...'); 
  }

}
