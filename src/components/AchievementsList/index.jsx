import "./style.scss";
import { ReactComponent as Edit } from "./edit.svg";
import { ReactComponent as Delete } from "./delete.svg";
import { ReactComponent as Star } from "./star.svg";
import { useContext } from "react";
import { Context } from "../../lib/Context";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function AchievementsList({ achievements }) {
  const { t } = useTranslation()
  const listId = localStorage.getItem("listId");
  const token = localStorage.getItem("token");
  const { showEditor, changeShowEditor, updateAchievementsList } =
    useContext(Context);

  function AchievementCard({ title, description, id, done }) {
    function handleEditAchievement() {
      localStorage.setItem("achievementId", id);
      localStorage.setItem("achievementTitle", title);
      localStorage.setItem("achievementDescription", description);
      changeShowEditor(true);
    }

    async function handleDeleteAchievement() {
      await axios.delete("http://localhost:5000/achievements", {
        data: {
          achievement: id,
        },
        headers: {
          Authorization: token,
        },
      });
    }

    async function handleStatusAchievement() {
      await axios.put(
        "http://localhost:5000/achievements/state",
        {
          achievement: id,
          state: !done,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      updateAchievementsList(listId)
    }

    return (
      <div className={"achievement-card " + (done ? "done" : "")}>
        <div className="actions">
          <button>
            <Edit title={t("Editar conquista")} onClick={handleEditAchievement} />
          </button>
          <button title={t("Apagar conquista")} onClick={handleDeleteAchievement}>
            <Delete />
          </button>
        </div>
        <div className="icon"><Star/></div>
        <h3 className="name">{title}</h3>
        <p className="description">{description}</p>
        <button
          className="button-primary check-button"
          onClick={handleStatusAchievement}
        >
          {done ? t("cancelar") : t("concluir")}
        </button>
      </div>
    );
  }

  function AchievementModal() {
    let currentId = localStorage.getItem("achievementId");
    let currentTitle = localStorage.getItem("achievementTitle");
    let currentDescription = localStorage.getItem("achievementDescription");

    async function handleSaveButton(e) {
      e.preventDefault();
      let title = document.getElementById("title").value;
      let description = document.getElementById("description").value;

      if (currentId) {
        await axios.put(
          "http://localhost:5000/achievements",
          {
            achievement: currentId,
            title,
            description,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
      } else {
        await axios.post(
          "http://localhost:5000/achievements",
          {
            list: listId,
            title,
            description,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
      }
      localStorage.removeItem("achievementId");
      localStorage.removeItem("achievementTitle");
      localStorage.removeItem("achievementDescription");
      updateAchievementsList(listId);
      changeShowEditor(false);
    }

    function handleCancelButton() {
      changeShowEditor(false);
    }

    return (
      <div className="achievement-modal-backdrop">
        <div className="achievement-modal">
          <form onSubmit={(e) => handleSaveButton(e)}>
            <label className="label" htmlFor="title">
              {t("Título")}
            </label>
            <input
              className="input"
              type="text"
              id="title"
              required
              defaultValue={currentTitle}
            />
            <label className="label" htmlFor="description">
              {t("Descrição")}
            </label>
            <textarea
              className="input textarea"
              id="description"
              cols="30"
              rows="10"
              required
              defaultValue={currentDescription}
            ></textarea>
            <label className="label" htmlFor="icon">
              {t("Icone")}
            </label>
            <select className="input" id="icon" disabled>
              <option defaultValue>{t("Escolher")}</option>
              <option value="balao">Balão</option>
            </select>
            <div className="buttons">
              <button
                className="button-secondary button"
                type="button"
                onClick={() => {
                  handleCancelButton();
                }}
              >
                {t("cancelar")}
              </button>
              <button className="button-primary" type="submit">
                {t("salvar")}
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
        {achievements.map((achievement, key) => (
          <AchievementCard key={key} {...achievement} />
        ))}
      </section>
      {showEditor ? <AchievementModal /> : ""}
    </>
  );
}
