import { FormularioRegister } from './formulario';
import { FormBuilder } from "@angular/forms";

describe('',()=>{

    let componente: FormularioRegister;


    beforeEach( ()=>{
        componente = new FormularioRegister( new FormBuilder() );
    });

    // El formulario al menos tenga dos campos
    it(' Debe de crear un formulario con dos campos ', ()=>{
        // no tengo que llamar ningun componente

        expect( componente.form.contains('email')).toBeTruthy(); // debe contener email y debe existir
        expect(componente.form.contains('password')).toBeTruthy(); // debe contener password y debe existir
    });

    it(' El email debe ser obligatorio', () => {
       
        const control = componente.form.get('email');

        control.setValue(''); // Inicializando con un espacio vacio y rompe el required de html5

        expect( control.valid).toBeFalsy(); // espera que está condición del campo sea falsa


    });

    it(' El email debe ser un correo valido', () => {

        const control = componente.form.get('email');

        control.setValue('peter@hotmail.com'); // no es un correo valido

        expect(control.valid).toBeTruthy(); // el correo debe ser valido


    });
})