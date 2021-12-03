import { useParams } from "react-router-dom";
import ListHeader from "../components/ListHeader";
import Header from "../components/Header";
import AchievementsList from "../components/AchievementsList";
import CheckAuth from "../lib/Auth";

export default function List({ match }) {
  const { listId } = useParams();
  console.log(listId);
  return (
    <>
    <CheckAuth />
      <Header />
      <main className="top-padding container">
        <ListHeader />
        <AchievementsList />
      </main>
    </>
  );
}
