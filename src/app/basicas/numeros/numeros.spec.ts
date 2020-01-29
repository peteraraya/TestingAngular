import { incrementar } from './numeros';

describe('Pruebas de números', ()=>{


    // Prueba 1 : Comprobar si el número ingresado es mayor a 100
    it(' Debe retornar 100 si el número ingresado es mayor a 100', () =>{
        
        const res = incrementar(300);

        expect( res ).toBe(100);
    });

    // Prueba 2 : Comprobar si el número ingresado es menor a 100
    it(' Debe retornar el número ingresado + 1 si no es mayor a 100', () => {

        const res = incrementar(50);

        expect(res).toBe(51);

        
    });


});