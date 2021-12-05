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
        {/* <ul className="list-group list-group-flush">
          <a href="/game/hangman">
            <li className="list-group-item text-primary bg-dark">Hangman</li>
          </a>
          <li className="list-group-item text-primary bg-dark">Racing</li>
          <li className="list-group-item text-primary bg-dark">Guess Number</li>
        </ul> */}
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
        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item text-primary bg-dark">Mathematics</li>
          <li className="list-group-item text-primary bg-dark">Coding</li>
          <li className="list-group-item text-primary bg-dark">English</li>
        </ul> */}
      </div>
    </div>
  );
}

export default Body;
