import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { RUTAS } from './avanzado/rutas/app.routes';
// Definir pruebas del router outlet
import { RouterTestingModule} from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        // NavbarComponent // debemos agregarlo aquí
      ],
      imports:[
        RouterTestingModule.withRoutes([])
      ],
      schemas:[ NO_ERRORS_SCHEMA] // ignora cualquier componente, cualquier directiva que no conozca
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pruebas');
  });

  // Se omite prueba ya que se borra el codigo del app.component.html 
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('pruebas app is running!');
  // });

  // Prueba  que comprueba si el <router-outlet> existe
  it('Debe de tener un router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // Comprobación de que exista

    const debugElement = fixture.debugElement.query( By.directive( RouterOutlet ));

    expect( debugElement ).not.toBeNull(); // debería ser nulo si no lo encontró
  });

  // Prueba que confirma que exista un routerLink a una dirección en particular

  // xit('Debe de tener un link a la página de médicos', () => {
    
  //   const fixture = TestBed.createComponent(AppComponent);

  //   // Hacer el  debug de los elementos
  //   const elementos = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ));

  //   console.log( elementos );

  //   let existe = false;
    
  //   for( const elemen of elementos){

  //     // por cada elemento extraere cada una de la propiedades
  //     if (elemen.attributes['routerLink'] === '/medicos' ) {
  //        existe = true;
  //        break;
  //     }
  //   }

  //   expect( existe ).toBeTruthy();

  // });
  
  
});






// Aqui utilizamos el fixture para determinar si
  // 1) se crea la aplicación
  // 2) si existe un título
  // 3) 