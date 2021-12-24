import React from 'react';
import './Arts.css'

import { useTranslation } from "react-i18next"


function Arts() {
  
  const { t } = useTranslation()
  return (
    <div className="container-fluid row main_cards">
      <div className="card bg-dark col-sm-2 mycard">
        <a href={"/Arts/Photography"}>
          <img
            src="./images/photography.jpg"
            className="card-img-top card-image"
            alt="arts"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">{t('Photography')}</h5>
          <p className="card-text">
          {t("photography_description")}
          </p>
        </div>
      </div>

      <div className="card bg-dark col-sm-2 mycard">
        <a href={"/Arts/Drawings"}>
          <img
            src="./images/drawings.jpg"
            className="card-img-top card-image"
            alt="arts"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">{t('Drawings')}</h5>
          <p className="card-text">
            {t("drawings_description")}
          </p>
        </div>
      </div>

      <div className="card bg-dark col-sm-2 mycard">
        <a href={"/arts/piano"}>
          <img
            src="./images/piano.jpg"
            className="card-img-top card-image"
            alt="arts"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">{t('Piano')}</h5>
          <p className="card-text">
          {t("piano_description")}
          </p>
        </div>
      </div>

      <div className="card bg-dark col-sm-2 mycard">
        <a href={"/arts/cello"}>
          <img
            src="./images/cello.jpg"
            className="card-img-top card-image"
            alt="arts"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">{t('Cello')}</h5>
          <p className="card-text">
          {t("cello_description")}
          </p>
        </div>
      </div>

    </div>
  );
}
export default Arts;
