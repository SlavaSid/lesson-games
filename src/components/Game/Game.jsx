import { useParams, useNavigate } from "react-router-dom";
import { useGetGamesQuery } from "../../actions/gamesApi.js"
import { HomeButton } from "../HomeButton/HomeButton";
import { Loader } from "../Loader/Loader.jsx";
import styles from "./Game.module.scss";

export const Game = () => {
  const params = useParams();
  const { data = [], isLoading } = useGetGamesQuery();
  const navigate = useNavigate();

  if (isLoading) return <Loader />;

  const gameKey = Object.keys(data).find(
    (key) => key === `${params.provider}/${params.game}`
  );

  if (gameKey === undefined) {
    return navigate("/404");
  }

  const game = data[gameKey];

  return (
    <div className={styles.container}>
      <HomeButton />
      <h1 className={styles.title}>{game.title}</h1>
    </div>
  );
};