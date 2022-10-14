import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en el componente TodoItem', () => { 

    const todo = {
        id: 1, 
        describe: 'Piedra del Alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks());

    test('Debe de mostrar el Todo Pendiente de completar', () => { 


        
        render( <TodoItem 
            todo={ todo }  
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock }
            />
        );
        
        const liElement = screen.getByRole('listitem');
        
        expect( liElement. className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');

        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');


     });

    test('Debe de mostrar el Todo completado', () => { 
        
        todo.done = true

        render( <TodoItem 
            todo={ todo }  
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock }
            />
        );
        
        const spanElement = screen.getByLabelText('span');

        expect( spanElement.className ).toContain('text-decoration-line-through');


     });

     test('El span debe llamar el ToggleTodo cuando se hace el onclick', () => { 

        render( <TodoItem 
            todo={ todo }  
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');

        fireEvent.click( spanElement )

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )

      });

     test('El button debe llamar el deleteTod cuando se hace el onclick', () => { 

        render( <TodoItem 
            todo={ todo }  
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock }
            />
        );

        const buttonElement = screen.getByRole('button');

        fireEvent.click( buttonElement )

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id )

      });

 })