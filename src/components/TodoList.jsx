import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteTodo } from '../features/todo/todoSlice'

export default function TodoList() {


    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const  todos = useSelector(state => state.todos)
    return (
        <ul class="list-group mt-5">
            <li class="list-group-item active" aria-current="true">All Todos</li>
            {
                todos && todos.length == 0 ?
                    <li class="list-group-item">
                        <p>No data Found...</p>
                    </li> :
                    todos && todos.map((todo) => {
                        return (
                            <li class="list-group-item d-flex justify-content-between">
                                <Link to={`/detail/${todo.id}`}><span>{todo.title}</span></Link>
                                <button onClick={() => handleDelete(todo.id)} className="btn btn-danger"><i class="bi bi-trash3" ></i></button>
                            </li>
                        )
                    })
            }

        </ul>
    )
}