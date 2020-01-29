import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleanos', () => {

    it('Debe regresar true ',()=>{

        const res = usuarioIngresado();

        expect( res ).toBeTruthy(); // se utiliza en caso de booleanos true
        // expect(res).not.toBeTruthy(); // se utiliza en caso de booleanos false
    });
});