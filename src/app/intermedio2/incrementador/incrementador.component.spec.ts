import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

// PRUEBAS DE INTEGRACIÓN , lo ideal no es mesclar con las prubas unitarias

describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); // disparar la detección de cambios

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('Progreso de carga');

    });

    it( 'Debe de mostrar en el input el valor del progreso', () => {

        component.cambiarValor(5); // LLamamos la función
        fixture.detectChanges();// disparar la detección de cambios , no es tan rapida

        // cuando ya esté lista la detección de cambios enviamos una especie de promesa
        fixture.whenStable().then( () => {

            const input = fixture.debugElement.query( By.css('input') ); // Obtengo el input
            const elem = input.nativeElement;

            console.log( elem );

            expect( elem.value ).toBe( '55' ); // esto se evaluaba antes por eso fue necesario aplicar whenStable


        });

    });


    it( 'Debe de incrementar/decrementar en 5, con un click en el botón', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') ); // agarro todos los botones con la condicción de seleeción

        botones[0].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(50);


    });

    // Confirmar que progreso ha cambiado
    it( 'En el titulo del componente, debe de mostrar el progreso', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') ); // referencia a los botones
        botones[0].triggerEventHandler('click', null); // disparamos el evento click

        fixture.detectChanges(); // detectamos cambios para que angular renderise el nuevo valor del progreso

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement; // revisar si en el h3 se encuentra el progreso nuevo

        expect( elem.innerHTML ).toContain('45'); // ele elemn.innerHtml debe de contener un string con el valor 45
    });

});
