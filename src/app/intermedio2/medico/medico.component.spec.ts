import { TestBed, ComponentFixture } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';


// Pruebas unitarias

describe("Medico Component", () => {

    let component: MedicoComponent;

    let fixture: ComponentFixture<MedicoComponent>;


    beforeEach( ()=>{
        // Configuración de prueba de integración
        TestBed.configureTestingModule({
            declarations:[ MedicoComponent],
            providers: [MedicoService], // cuando un componente utiliza un servicio hay que ponerlo en este lugar
            imports:[ HttpClientModule]
        });
        // Regresa un fixture: que nos va permitir tener acceso al html , a los componentes del dom etc
        fixture = TestBed.createComponent(MedicoComponent);

        component = fixture.componentInstance;
    });

    it('Debe de crearse el componente',()=>{

        expect( component ).toBeTruthy();
    });

    it('Debe de retornar el nombre del médico', () => {

        const nombre = 'Juan';
        const res = component.saludarMedico( nombre );

        expect(res).toContain(nombre);
    });
});


// ComponentFixture : nos va permitir manejar el dom simulando a lo que hace jquery


// Tenemos que espesificar el TestBed porque es prbable que necesite inyectar un servicio


// Necesitamos 