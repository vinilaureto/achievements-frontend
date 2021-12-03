import './style.scss';
import { Link } from 'react-router-dom'

export default function ListsDisplay() {

    const listItemProp = {
        name: "Nome da lista",
        complete: 15,
        total: 25,
        link: 1 // id
    }

    function ListItem({name, complete, total, link}) {
        return (
            <Link className="list-item" to={`/lista/${link}`}>
            <span className="name">{name}</span>
            <span className="completition">{complete}/{total} conquistas realizadas</span>
        </Link>
        )
    }

    return (
        <section className="lists container">
            <div className="lists-header">
                <h2 className="title">Minhas listas de conquistas:</h2>
                <button className="button-primary">nova lista</button>
            </div>
            <ListItem {...listItemProp}/>
        </section>
    )
}