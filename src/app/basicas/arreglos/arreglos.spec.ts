import { obtenerRobots } from './arreglos';

describe('Pruebade arreglos', () => {


    // Prueba 1 : Si el arreglo robots tiene al menos 3 robots
    it(' Debe retornar al menos 3 robots', () => {

        const res = obtenerRobots();

        expect( res.length ).toBeGreaterThanOrEqual(3); // espero que el arreglo tenga 3 o + robots
    });


    // Prueba 2 : Si el arreglo tiene dos nombres en espesifico
    it(' Debe de existir Megaman y Ultron', () => {

        const res = obtenerRobots();

        expect(res).toContain('Megaman'); 
        expect(res).toContain('Ultron'); 

        // Si uno de estos dos falla la prueba falla
    });



});