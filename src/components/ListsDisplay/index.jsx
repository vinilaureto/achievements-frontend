import "./style.scss";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'

export default function ListsDisplay() {
  const { t } = useTranslation()
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [lists, setLists] = useState([]);
  const navigate = useNavigate();

  // eslint-disable-next-line 
  const loadLists = useCallback(async () => {
    let response = await axios.get(`http://localhost:5000/list/${userId}`, {
      headers: {
        Authorization: token,
      },
    });
    setLists(response.data.lists);
  });

  useEffect(() => {
    loadLists();
    // eslint-disable-next-line 
  }, []);

  async function handleNewList() {
    let response = await axios.post(
      "http://localhost:5000/list/",
      {
        title: "Nova lista",
        owner: userId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    if (response.status === 200) {
      redirectToList(response.data.id, response.data.title)
    } else {
      alert("Aconteceu algo de errado");
    }
  }

  function redirectToList(id, title) {
    localStorage.setItem('listId', id)
    localStorage.setItem('listTitle', title)
    navigate(`/lista/${id}`);
  }

  function ListItem({ id, name }) {
    return (
      <button className="list-item" onClick={() => redirectToList(id, name)}>
        <span className="name">{name}</span>
      </button>
    );
  }

  return (
    <section className="lists container">
      <div className="lists-header">
        <h2 className="title">{t('Minhas listas de conquistas')}:</h2>
        <button className="button-primary" onClick={handleNewList}>
          {t('nova lista')}
        </button>
      </div>
      {lists.map((list, key) => (
        <ListItem name={list.title} key={key} id={list.id} />
      ))}
    </section>
  );
}
