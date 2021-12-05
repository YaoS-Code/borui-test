import "./Home.css";
function Body() {
  return (
    <div className="container-fluid row main_cards">
      <div className="card bg-dark col-sm-3 mycard">
        <a href={"/game"}>
          <img
            src="./images/game.png"
            className="card-img-top card-image"
            alt="Game"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">Games</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card bg-dark col-sm-3 mycard">
        <a href={"/course"}>
          <img
            src="./images/learn.png"
            className="card-img-top card-image"
            alt="..."
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">Courses</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
