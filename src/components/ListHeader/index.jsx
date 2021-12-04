import "./style.scss";
import { ReactComponent as Edit } from "./edit.svg";
import { ReactComponent as Delete } from "./delete.svg";
import { useState, useContext } from "react";
import { Context } from "../../lib/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListHeader({ achievements }) {
  const [listTitle, setListTitle] = useState(localStorage.getItem("listTitle"));
  const listId = localStorage.getItem("listId");
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { changeShowEditor, updateAchievementsList } = useContext(Context);

  function ListTitle() {
    const [edition, setEdition] = useState(false);

    async function handleSubmit(e) {
      e.preventDefault();
      let newTitle = document.getElementById("listTitleInput").value;
      setListTitle(newTitle);
      localStorage.setItem("listTitle", newTitle);

      await axios.put(
        `http://localhost:5000/list/${listId}`,
        {
          title: newTitle,
          owner: userId,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      updateAchievementsList(listId);
      setEdition(false);
    }

    function handleEdit() {
      setEdition(true);
    }

    async function handleDelete() {
      await axios.delete(`http://localhost:5000/list/${listId}`, {
        data: {
          owner: userId,
        },
        headers: {
          Authorization: token,
        },
      });
      navigate("/dashboard");
    }

    return (
      <>
        <div className="title-wrapper">
          <h2 className={"title " + (edition ? "hide" : "")}>{listTitle}</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              id="listTitleInput"
              defaultValue={listTitle}
              className={"title-editor " + (!edition ? "hide" : "")}
            />
          </form>
        </div>
        <div className="actions">
          <button onClick={handleEdit}>
            <Edit title="Editar lista" />
          </button>
          <button title="Apagar lista" onClick={handleDelete}>
            <Delete />
          </button>
        </div>
      </>
    );
  }

  function getAchievementsComplete(achievements) {
    let count = 0;
    for (let i = 0; i < achievements.length; i++) {
      if (achievements[i].done) {
        count++;
      }
    }
    return count;
  }

  function handleNewAchievement() {
    changeShowEditor(true);
  }

  function getPercentage() {

    if (getAchievementsComplete(achievements) == 0) {
      return "0%";
    } else if (getAchievementsComplete(achievements) == achievements.length) {
      return "100%";
    } else {
      let percent =
        (getAchievementsComplete(achievements) * 100) / achievements.length;
      return percent + "%";
    }
  }

  return (
    <section className="list-header">
      <div className="top">
        <div className="left">
          <ListTitle />
        </div>
        <button className="button-primary" onClick={handleNewAchievement}>
          Nova consquista
        </button>
      </div>
      <div className="progress">
        <span className="count">
          {getAchievementsComplete(achievements)}/{achievements.length}{" "}
          conquistas realizadas
        </span>
        <div className="progress-wrapper">
          <div
            style={{ width: getPercentage() }}
            className={
              "progress-marker " + (getPercentage() == "100%" ? "complete" : "")
            }
          ></div>
        </div>
      </div>
    </section>
  );
}
