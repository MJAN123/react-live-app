import React, {useState} from 'react'
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
const Todo = () => {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (todo) =>{
        setTodoList([...todoList, todo])
    }
    const deleteTodo = (id) =>{
        setTodoList(todoList.filter((item => item.id !==id)))
    }
    const editTodo = (todo) =>{
        setTodoList(todoList.map((item)=> todo.id === item.id ? todo:item))
    }
    const completeTodo = (id, status) =>{
        setTodoList(todoList.map((item)=>{
            return id === item.id ? {...item, isComplete:true}:item;
        }))
    }
    return (
        <div className='todo-container'>
            <div className="add-section">
                <TodoAdd addTodo ={addTodo}/>
            </div>
            <div className="list-section">
            {todoList.length>0 && todoList.map((item)=>{
                return  <TodoList key={item.id} todo={item} deleteTodo={deleteTodo} editTodo={editTodo} completeTodo={completeTodo}/>
            })
            }
            </div>
        </div>
    )
}

export default Todo

