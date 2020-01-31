import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs/internal/observable';
import { from, empty, throwError  } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null); // utilizamos null para evitar errores

    beforeEach( () => {
            componente = new MedicosComponent(servicio);
    });


    it('Init debe de cargar los médicos', () => {

       
        const medicos = ['medico1', 'medico2','medico3'];

        // Espia al servicio y cuando alguien llame ea getMedicos vas a llamar y ejecutar la función a definir
        spyOn( servicio, 'getMedicos' ).and.callFake( () => {
            return from([medicos])
;        }); 
        
        // spyOn nos permite hacer peticiones falsas cuando algo suceda
        componente.ngOnInit();
        expect( componente.medicos.length).toBeGreaterThan(0);
   
    });

    it( ' Debe de llamar al servidor para agregar un médico', () =>{
        
        const espia = spyOn(servicio, 'agregarMedico').and.callFake( medico =>{
        return empty();
    });

        componente.agregarMedico();

        expect( espia ).toHaveBeenCalled(); // que sea llamado
    });

    it(' Debe agregar un nuevo médico al arreglo médicos', () => {

        const medico = { id:1, nombre: 'Juan' };

        spyOn( servicio, 'agregarMedico')
             .and.returnValue( from([ medico])); // retorna un observarble
      
        componente.agregarMedico();

        // Evaluación de la prueba : que el medico enviado este inccluido en el arreglo del componente
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0) // que sea llamado
    });

    it(' Si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio', () => {

        const miError = 'No se pudo agregar el médico';

        spyOn(servicio, 'agregarMedico').and
             .returnValue(throwError(miError))

        componente.agregarMedico();

        // Evaluación de la prueba 
        expect(componente.mensajeError ).toBe(miError) // que sea llamado
    });

    it('Debe llamar al servidor para borrar un medico', () => {


        spyOn ( window, 'confirm').and.returnValue(true); // realiza la confirmación automaticamente con window

        const espia = spyOn( servicio , 'borrarMedico' )
                            .and.returnValue( empty());

        componente.borrarMedico('1');

        // Evaluación de la prueba 
        expect(espia).toHaveBeenCalledWith('1'); // que sea llamado con ese numero
    });
    // Proceso opuesto
    it(' No debe llamar al servidor para borrar un medico', () => {


        spyOn(window, 'confirm').and.returnValue(false); // realiza la confirmación automaticamente con window

        const espia = spyOn(servicio, 'borrarMedico')
            .and.returnValue(empty());

        componente.borrarMedico('1');

        // Evaluación de la prueba 
        expect(espia).not.toHaveBeenCalledWith('1'); // que sea llamado con ese numero
    });



});
