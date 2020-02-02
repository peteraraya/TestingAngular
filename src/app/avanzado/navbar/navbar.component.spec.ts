import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { RouterLinkWithHref } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Prueba personalizada para el navbar sobre el routerLink
  it('Debe de tener un link a la página de médicos', () => {


    // Hacer el  debug de los elementos
    const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    console.log(elementos);

    let existe = false;

    for (const elemen of elementos) {

      // por cada elemento extraere cada una de la propiedades
      if (elemen.attributes['routerLink'] === '/medicos') {
        existe = true;
        break;
      }
    }

    expect(existe).toBeTruthy();

  });
});
