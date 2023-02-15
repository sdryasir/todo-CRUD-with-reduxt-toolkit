import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Detail() {

    const { id } = useParams()
    const todos = useSelector(state => state.todos)

    const todo = todos.find((todo) => todo.id == id)

    return (
        <div className='container'>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{todo.title}</h5>
                    <p class="card-text">{todo.body}</p>
                    <a href="#" class="btn btn-primary">Hahaha</a>
                </div>
            </div>
        </div>
    )
}

export default Detail