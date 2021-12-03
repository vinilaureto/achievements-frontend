import "./style.scss";
import { ReactComponent as Edit } from "./edit.svg";
import { ReactComponent as Delete } from "./delete.svg";
import { useState } from "react";

export default function AchievementsList() {
  const [showEditor, setShowEditor] = useState(true);

  function AchievementCard() {
    return (
      <div className="achievement-card">
        <div className="actions">
          <button>
            <Edit title="Editar conquista" />
          </button>
          <button title="Apagar conquista">
            <Delete />
          </button>
        </div>
        <div className="icon"></div>
        <h3 className="name">Nome da conquista</h3>
        <p className="description">Lorem ipsum sit amet lorem ipsum sit amet</p>
        <button className="button-primary check-button">concluir</button>
      </div>
    );
  }

  function AchievementModal({ title = "", description = "" }) {
    function handleSaveButton() {
      console.log("save");
    }

    function handleCancelButton() {
      setShowEditor(false);
    }

    return (
      <div className="achievement-modal-backdrop">
        <div className="achievement-modal">
          <form>
            <label className="label" htmlFor="title">
              Título
            </label>
            <input
              className="input"
              type="text"
              id="title"
              defaultValue={title}
            />
            <label className="label" htmlFor="description">
              Descrição
            </label>
            <textarea
              className="input textarea"
              id="description"
              cols="30"
              rows="10"
              defaultValue={description}
            ></textarea>
            <label className="label" htmlFor="icon">
              Icone
            </label>
            <select className="input" id="icon">
              <option defaultValue>Escolher</option>
              <option value="balao">Balão</option>
            </select>
            <div className="buttons">
              <button
                className="button-secondary button"
                onClick={() => {
                  handleCancelButton();
                }}
              >
                cancelar
              </button>
              <button
                className="button-primary"
                onClick={() => {
                  handleSaveButton();
                }}
              >
                salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="achievements-list">
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
      </section>
      {showEditor ? <AchievementModal /> : ""}
    </>
  );
}
