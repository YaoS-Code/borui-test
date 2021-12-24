import './Game.css'
import React  from 'react';

import { useTranslation } from "react-i18next"

function Game() {
  
  const { t } = useTranslation()
  
  return (
    <div className="container-fluid row main_cards">
      <div className="card bg-dark col-sm-2 mycard">
        <a href={"/game/hangman"}>
          <img
            src="/images/hangman.png"
            className="card-img-top card-image"
            alt="Game"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">{t("Hangman")}</h5>
          <p className="card-text">
            {t('hangman_description')}
          </p>
        </div>
      </div>
      <div className="card bg-dark col-sm-2 mycard">
        <a href={"/game/jump"}>
          <img
            src="/images/jump.jpg"
            className="card-img-top card-image"
            alt="Game"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">{t("Jump")}</h5>
          <p className="card-text">
          {t('jump_description')}
          </p>
        </div>
      </div>
      <div className="card bg-dark col-sm-2 mycard">
        <a href={"/game/flappybird"}>
          <img
            src="/images/FlappyBird.png"
            className="card-img-top card-image"
            alt="Game"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">{t("Flappy")}</h5>
          <p className="card-text">
          {t("flappy_description")}
          </p>
        </div>
      </div>
      <div className="card bg-dark col-sm-2 mycard">
        <a href={"/game/arkanoid"}>
          <img
            src="/images/arkanoid.jpg"
            className="card-img-top card-image"
            alt="Game"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">{t("Arkanoid")}</h5>
          <p className="card-text">{t("arkanoid_description")}</p>
        </div>
      </div>
    </div>
  );
}
export default Game;
