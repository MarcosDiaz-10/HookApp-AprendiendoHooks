import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas a useForm', () => { 

    const initialForm = {
        name: 'Marcos',
        email: 'pepe@gmail.com'
    }

    test('Debe de regresar los valores por defecto', () => { 

        const { result } = renderHook( () => useForm( initialForm ) )

        expect(result.current).toEqual({
            name:initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })

     });

     test('Debe de cambiar el nombre del formulario', () => { 
        const newValue = 'Diaz'
        const { result } = renderHook( () => useForm( initialForm ) )
        const { onInputChange } = result.current;
        const target = {
            name: 'name',
            value: newValue
        }
        
        
        act( () => {
            onInputChange( { target })
        })
        
        expect( result.current.name ).toBe( newValue )
        expect( result.current.formState.name ).toBe( newValue )

      });


     test('Debe de realizar el reset del formulario', () => { 
        const newValue = 'Diaz'
        const { result } = renderHook( () => useForm( initialForm ) )
        const { onInputChange, onResetForm } = result.current;
        const target = {
            name: 'name',
            value: newValue
        }
        
        
        act( () => {
            onInputChange( { target });
            onResetForm();
        })
        
        expect( result.current.name ).toBe( initialForm.name )
        expect( result.current.formState.name ).toBe( initialForm.name )

      });


 })