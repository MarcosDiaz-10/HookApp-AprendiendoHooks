import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";


jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter')
describe('Pruebas a MultipleCustomHooks', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({ 
        counter: 1, 
        increment: mockIncrement,
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })
  
    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks/>);

        expect( screen.getByText('Loading...'))
        expect( screen.getByText('Breaking Bad Quotes'))

        const prevButton = screen.getByRole('button', {name: 'Prev quote'});
        const firstButton = screen.getByRole('button', {name: 'First quote'});
        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        expect( prevButton.disabled).toBeTruthy();
        expect( firstButton.disabled).toBeTruthy();
        expect( nextButton.disabled).toBeTruthy();

     });

     test('Debe de mostrar un quote', () => {

        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks/>);
        
        expect( screen.getByText('Hola Mundo')).toBeTruthy();
        expect( screen.getByText('Fernando')).toBeTruthy();

        const firstButton = screen.getByRole('button', {name: 'First quote'});
        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        expect( nextButton.disabled).toBeFalsy();
        expect( firstButton.disabled).toBeFalsy();

      });

      test('Debe de llamar la funcion de incrementar', () => { 


        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });


        render( <MultipleCustomHooks/>);

        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();


       })

 })