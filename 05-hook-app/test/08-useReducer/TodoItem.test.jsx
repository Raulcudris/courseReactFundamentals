import { render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en el <TodoItem />', () => { 
    const  todo = {
        id : 1,
        description: 'Piedra del Alma',
        done : false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( ()=> jest.clearAllMocks());
    
    test('debe de mostrar el Todo pendiente de completar', () => { 
        render(<TodoItem  
                 todo={ todo}
                 onToggleTodo={ onToggleTodoMock}
                 onDeleteTodo={ onDeleteTodoMock}/>);
        //screen.debug();
        const liElement  = screen.getByRole('listitem');
        //console.log( liElement.innerHTML);

        expect( liElement.className ).toBe('align-self-center');

     });

 });