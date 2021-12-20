import './Arts.css'
function Arts() {
  return (
    <div className="container-fluid row main_cards">
      <div className="card bg-dark col-sm-4 mycard">
        <a href={"/Arts/Photography"}>
          <img
            src="./images/photography.jpg"
            className="card-img-top card-image"
            alt="arts"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">Photography 摄影</h5>
          <p className="card-text">
            好朋友(Wen, Shen)的摄影集
          </p>
        </div>
      </div>

      <div className="card bg-dark col-sm-4 mycard">
        <a href={"/Arts/Drawings"}>
          <img
            src="./images/drawings.jpg"
            className="card-img-top card-image"
            alt="arts"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">Drawings 绘画</h5>
          <p className="card-text">
            Drawings from my families.
          </p>
        </div>
      </div>

      <div className="card bg-dark col-sm-4 mycard">
        <a href={"/arts/piano"}>
          <img
            src="./images/piano.jpg"
            className="card-img-top card-image"
            alt="arts"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">Piano 钢琴</h5>
          <p className="card-text">
          Piano from Hubery Song.
          </p>
        </div>
      </div>

      <div className="card bg-dark col-sm-4 mycard">
        <a href={"/arts/cello"}>
          <img
            src="./images/cello.jpg"
            className="card-img-top card-image"
            alt="arts"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">Cello 大提琴</h5>
          <p className="card-text">
          Cello from Hubery Song.
          </p>
        </div>
      </div>

    </div>
  );
}
export default Arts;
