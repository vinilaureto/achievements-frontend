import axios from "axios";
import { createContext, useState } from "react";

export const Context = createContext();

export default function ContextProvider({ children }) {
  const [showEditor, setShowEditor] = useState(false);
  const [achievements, setAchievements] = useState([])

  function changeShowEditor(value) {
    setShowEditor(value);
  }

  async function updateAchievementsList(listId) {
    let token = localStorage.getItem('token')
    let response = await axios.get(`http://localhost:5000/achievements/${listId}`, {
      headers: {
        'Authorization': token
      }
    })
    setAchievements(response.data.achievements)
  }

  return (
    <Context.Provider
      value={{
        showEditor,
        changeShowEditor,
        achievements,
        updateAchievementsList
      }}
    >
      {children}
    </Context.Provider>
  );
}
