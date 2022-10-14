import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer"
import { useTodo } from "../../src/hooks/useTodo"

jest.mock('../../src/hooks/useTodo')

describe('Pruebas en todoApp', () => { 

    test('Debe de mostrar el componente correctamente', () => { 
        
        useTodo.mockReturnValue({
            todos: [
                { id: 1, description: 'Todo 1', done: false},
                { id: 2, description: 'Todo 2', done: true},
            ],
            todosCount: 2, 
            pendingTodosCount: 1,
            handleNewTodo: jest.fn(), 
            handleDelete: jest.fn(), 
            handleToggleTodo: jest.fn(),
        });

        render( <TodoApp/>)
        // screen.debug();

        expect( screen.getByText('Todo 1')).toBeTruthy();
        expect( screen.getByText('Todo 2')).toBeTruthy();
        expect( screen.getByRole('textbox')).toBeTruthy();
        
     })



 })