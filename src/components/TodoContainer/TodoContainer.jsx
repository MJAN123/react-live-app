import React, {useState} from 'react'
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
const Todo = () => {
    const [todos, setTodos] = useState([]);

    /**
     * Handle Adding todo
     * add todo to list
     * @param newTodo
     */
    const handleAddingTodo = (newTodo) =>{
        setTodos([...todos, newTodo])
    }

    /**
     * Handle deleting todo
     * remove todo to list
     * @param id
     */
    const handleDeleteTodo = (id) =>{
        setTodos(todos.filter((todo => todo.id !== id)))
    }


    /**
     * Handle Edit todo
     * enable edit state of todo
     * @param id
     */
    const handleEditTodo = (data) =>{
        setTodos(todos.map((todo)=> {
            return todo.id === data.id ? data: todo
        }))
    }

    /**
     * Handle Complete todo
     * enable Complete state of todo
     * @param id
     */
    const handleCompleteTodo = (id, status) =>{
        setTodos(todos.map((todo)=> {
            return todo.id === id ? {...todo, isComplete:status}: todo
        }))
    }
    
    return (
        <div className='todo-container'>
            <div className="add-section">
                <TodoAdd addingTodo={handleAddingTodo}/>
            </div>
            <div className="list-section">
            {todos.length>0 && todos.map((todo)=>{
                return<TodoList key ={todo.id} todo={todo} editTodo = {handleEditTodo} 
                deleteTodo = {handleDeleteTodo} completeTodo = {handleCompleteTodo}/>
            })
            }
            </div>
        </div>
    )
}

export default Todo

