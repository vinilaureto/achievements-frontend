import "./style.scss";
import { ReactComponent as Edit } from "./edit.svg";
import { ReactComponent as Delete } from "./delete.svg";

export default function ListHeader() {
  return (
    <section className="list-header">
      <div className="top">
        <div className="left">
          <h2 className="title">Nome da lista</h2>
          <div className="actions">
            <button>
              <Edit title="Editar lista" />
            </button>
            <button title="Apagar lista">
              <Delete />
            </button>
          </div>
        </div>
        <button className="button-primary">Nova consquista</button>
      </div>
      <div className="progress">
        <span className="count">25/30 conquistas realizadas</span>
        <div className="progress-wrapper">
            <div style={{"width": "50%"}} className="progress-marker"></div>
        </div>
      </div>
    </section>
  );
}
