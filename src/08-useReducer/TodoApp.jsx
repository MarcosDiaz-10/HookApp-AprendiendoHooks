import { useTodo } from "../hooks"
import {TodoAdd,TodoList } from './'


export const TodoApp = () => {
    
    const { todos, todosCount, pendingTodosCount,handleNewTodo, handleDelete, handleToggleTodo} = useTodo();
    
    return (
        <>
            <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDelete}
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />
                    <TodoAdd 
                        onNewTodo={ handleNewTodo }
                    />
                </div>
            </div>
        </>
  )
}
