import "./Home.css";
import { useTranslation } from "react-i18next"

function Body() {
  const { t } = useTranslation()
  return (
    <div className="container-fluid row main_cards">
      <div className="card bg-dark col-sm-3 home-card">
        <a href={"/game"}>
          <img
            src="./images/game.png"
            className="card-img-top card-image"
            alt="Game"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{t('Game')}</h5>
          <p className="card-text">
            {t('game_description')}
          </p>
        </div>
      </div>
      <div className="card bg-dark col-sm-3 home-card">
        <a href={"/course"}>
          <img
            src="./images/learn.png"
            className="card-img-top card-image"
            alt="..."
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{t('Course')}</h5>
          <p className="card-text">
            {t('course_description')}
          </p>
        </div>
      </div>

      <div className="card bg-dark col-sm-3 home-card">
        <a href={"/arts"}>
          <img
            src="./images/arts.png"
            className="card-img-top card-image"
            alt="..."
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{t('Art')}</h5>
          <p className="card-text">
            {t('art_description')}
          </p>
        </div>
      </div>

    </div>
  );
}

export default Body;
