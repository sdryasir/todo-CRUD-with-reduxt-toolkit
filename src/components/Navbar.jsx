import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
export default function Navbar() {


    const todos = useSelector(state=>state.todos)

    console.log(todos);

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">{todos.length}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}