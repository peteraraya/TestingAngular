import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styles: []
})
export class RouterMedicoComponent implements OnInit {

  id: string;

  constructor(
    // Leer url 
    public router: Router,
    public activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activateRoute.params
      .subscribe( params => {
        this.id = params['id'];
      });
  }

  // Guarda y navega
  guardarMedico(){
    this.router.navigate(['medico','123']);
  }

}
