import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const initialState = [];

const init = () => {
    return  JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };

        dispatch( action );
    };

    const handleDeleteTodo = ( id ) => {
        console.log({ id })
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    };

    const handleToggleTodo = ( id ) => {        
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    };    
    
    const pendingTodosCount = todos.filter(todo => !todo.done > 0).length

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
