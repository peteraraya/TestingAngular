import { mensaje } from './string';
// Partes generales de un prueba
// Sirve para agrupar pruebas
describe('Pruebas de Strings', () => {

    // Prueba 1: DEBE RETORNAR UN STRING
    it( 'Debe de regresar un string ', () => {

       const  resp = mensaje('Peter');

        expect( typeof resp).toBe('string'); // la respuesta que sea , sea un string
    });

    // Prueba 2 : DEBE RETORNAR UN SALUDO CON EL NOMBRE ENVIADO
    it('Debe de retornar un saludo con el nombre enviado ', () => {

        const nombre = 'Juan';
        const resp = mensaje(nombre); // Enviamos un mensaje

        expect(resp).toContain(nombre); // Que contenga el nombre estará bien
    });
   
});





// Es una prueba, sirve para hacer una evaluación en concreto
// debe ser una descripción clara
// it('Debe regresar un string');
// it('Debe de contener un nombre');