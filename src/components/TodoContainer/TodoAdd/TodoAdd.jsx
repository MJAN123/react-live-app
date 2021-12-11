import React, {useState} from 'react'

const TodoAdd = ({addingTodo}) => {
    const [inputValue, setInputValue] = useState('')
    return (
        <div className='todo-add-container'>
            <div className="todo-add-input-field">
                <input className="input" type="text" placeholder="Todo..." value={inputValue} onChange={(e)=>{
                    setInputValue(e.target.value)
                }}/>
                <button className="add-button" disabled={!inputValue.length}  type="submit" onClick={()=>{
                    //setting in put to empty
                    setInputValue('')
                    addingTodo({
                        id : new Date() + inputValue,
                        title: inputValue,
                        isEdit: false,
                        isComplete: false,
                        color: Math.random().toString(16).substr(-8)
                    })
                
                }}>Add</button>
            </div>
        </div>
    )
}

export default TodoAdd
