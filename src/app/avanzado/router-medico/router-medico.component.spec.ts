import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
// Importamos
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/observable';
import { empty, Subject } from "rxjs";

// Serivicios falsos
class FakeRouter {
  navigate(params) {
  }
}

class FakeActivatedRoute {
  // params: Observable<any> = empty();
  // inicializamos

  private subject = new Subject();

  // Poder insertar un valor a un arreglo(subject)
  push(valor) {

    this.subject.next(valor);
  }

  get params() {
    // Quiero regresar un nuevo observable
    return this.subject.asObservable();
  }

}



describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [ // agregamos providers
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de redireccionar a medico cuando se guarde ', () => {

    const router = TestBed.get(Router);
    // Espias : implmentar un espia en un servicio
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });


  it('Debe de colocar el id = nuevo ', () => {

    component = fixture.componentInstance;

    // Crear una instancia de la fake

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute); // Referencia al servicio

    activatedRoute.push({ id: 'nuevo' }); // Simulando que estoy enviado los prams

    expect(component.id).toBe('nuevo');

  });


});
