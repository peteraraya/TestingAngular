
import { IncrementadorComponent } from './incrementador.component';

// PRUEBAS UNITARIAS

describe('Incrementador Component Unit', () => {

    let component: IncrementadorComponent;

    beforeEach( () => component = new IncrementadorComponent() );

    // Prueba :
    it( 'No debe de pasar de 100 el progreso', () => {

        component.progreso = 50; // inicializamos
        component.cambiarValor( 5 ); // cambiamos el valor sumando 5

        expect( component.progreso ).toBe(55); 

    });


});

