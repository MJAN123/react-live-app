import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faCheck, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
const TodoList = ({todo, deleteTodo, completeTodo, editTodo}) => {
    const [updatedValue, setUpdatedValue] = useState(todo.title)
    return (
        <div className='todo-list-container' style={{backgroundColor: `#${todo.color}`}}>
        {
            todo.isEdit?
            <input className='input' type="text" value={updatedValue} onChange={(e)=>{
                setUpdatedValue(e.target.value)
            }}/>:
            <div className='title'>
                {todo.isComplete ?
                <s>
                    {todo.title}
                </s>:
                <span>
                {todo.title}
                </span>
                }
                
            </div>
        }
            <div className='todo-list-icons'>
            {
                todo.isEdit ?
                <div className='complete'>
                        <FontAwesomeIcon icon={faCheck} onClick={()=>{
                            editTodo({...todo, title:updatedValue, isEdit: false})
                        }} />
                </div>:
                <>
                    <div className='complete'>
                        <FontAwesomeIcon icon={faCheck} onClick={()=>{
                            completeTodo(todo.id, true)
                        }} />
                    </div>
                    <div className='edit'>
                        <FontAwesomeIcon icon={faEdit} onClick={()=>{
                            editTodo({...todo, isEdit:true})
                        }}/>›
                    </div>
                    <div className='delete' onClick={()=>{
                            deleteTodo(todo.id)}}>
                        <FontAwesomeIcon icon={faTimesCircle}/>
                    </div>
                </>
            }
            </div>
        </div>
    )
}

export default TodoList
