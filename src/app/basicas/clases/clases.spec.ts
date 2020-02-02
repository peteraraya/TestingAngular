import { Jugador } from './clases';
describe('Pruebas de clases ', ()=>{

    // Intancio clase de forma global
    let jugador = new Jugador(); // utilizamos let en vez de const porque lo cambiaremos


    beforeAll( () =>{
        //console.log('beforeAll')
    }); // Antes de todas y solo se ejecuta una vez

    beforeEach( () =>{
        //console.log('beforeEach')
        // jugador.hp = 100;
        jugador = new Jugador();
    }); // antes de cada na de las pruebas

    afterAll( () =>{
        //console.log('afterAll')
    }); // despúes de todas

    afterEach( () =>{
        //console.log('afterEach')
        jugador.hp = 100;
    }); // despúes de cada una de las pruebas

    // Prueba 1
    it( ' Debe retornar  80 de hp, si recibe 20 de daño', () => {

        //const jugador = new Jugador(); // instaciar

        const resp = jugador.recibeDanio(20);

        expect ( resp ).toBe(80);
    });

    // Prueba 2
    it(' Debe retornar  50 de hp, si recibe 50 de daño', () => {

        //const jugador = new Jugador(); // instaciar
        //console.log('Está prueba va a fallar ');

        const resp = jugador.recibeDanio(50);

        expect(resp).toBe(50);
    });

    // Prueba 3
    it(' Debe retornar  0 de hp, si recibe 100 de daño', () => {

        //const jugador = new Jugador(); // instaciar

        const resp = jugador.recibeDanio(100);

        expect(resp).toBe(0);
    });


});