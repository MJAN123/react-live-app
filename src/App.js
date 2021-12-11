import React from 'react'
import Header from './components/Header'
import TodoContainer from './components/TodoContainer'
const app = () => {
    return (
        <div className='app-container'>
            <Header/>
            <TodoContainer/>
        </div>
    )
}

export default app
