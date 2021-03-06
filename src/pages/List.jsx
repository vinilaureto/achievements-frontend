import ListHeader from "../components/ListHeader";
import Header from "../components/Header";
import AchievementsList from "../components/AchievementsList";
import CheckAuth from "../lib/Auth";
import { useCallback, useEffect, useContext } from "react";
import { Context } from "../lib/Context";
import Footer from "../components/Footer";

export default function List() {
  const { achievements, updateAchievementsList } = useContext(Context)
  const listId = localStorage.getItem('listId')

  // eslint-disable-next-line 
  const loadAchievements = useCallback(async () => {
    updateAchievementsList(listId)
  });

  useEffect(() => {
    loadAchievements();
    // eslint-disable-next-line 
  }, []);

  return (
    <>
    <CheckAuth />
      <Header />
      <main className="top-padding container">
        <ListHeader achievements={achievements}/>
        <AchievementsList achievements={achievements}/>
      </main>
      <Footer />
    </>
  );
}
