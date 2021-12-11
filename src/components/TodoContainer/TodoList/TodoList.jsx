import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faCheck, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const TodoList = ({todo, deleteTodo, completeTodo, editTodo}) => {
    const [updatedTitle, setUpdatedTitle] = useState (todo.title)
    return (
        <div className='todo-list-container' style={{backgroundColor : `#${todo.color}`}}>
            {todo.isEdit ? 
            <input className="input" type='text' value={updatedTitle} onChange={(e)=> {
                setUpdatedTitle(e.target.value)
            }}/>:
            <div className='title'>
                {
                    todo.isComplete ?
                    <s>{todo.title}</s>:
                    <span>{todo.title}</span>
                }
            </div>
            }

            <div className='todo-list-icons'>
                {!todo.isEdit?
                    <>
                        <div className="complete" title='Click to Complete' onClick={()=> completeTodo(todo.id, true)} >
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className="edit" title='Click to Edit' onClick={()=> editTodo({...todo, isEdit:true})}>
                            <FontAwesomeIcon icon={faEdit} />
                        </div>
                        <div className="delete" title='Click to Delete' onClick={()=> deleteTodo(todo.id)}>
                            <FontAwesomeIcon icon={faTimesCircle}  />
                        </div>
                    </>:
                    <div className="complete" title='Click to Complete' onClick={()=> editTodo({...todo, isEdit:false, title:updatedTitle})} >
                            <FontAwesomeIcon icon={faCheck} />
                    </div>

                }
            </div>
        </div>
    )
}

export default TodoList
