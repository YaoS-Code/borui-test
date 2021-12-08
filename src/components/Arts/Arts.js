import './Arts.css'
function Arts() {
  return (
    <div className="container-fluid row main_cards">
      <div className="card bg-dark col-sm-3 mycard">
        <a href={"/Arts/Drawings"}>
          <img
            src="./images/drawings.jpg"
            className="card-img-top card-image"
            alt="arts"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">Drawings</h5>
          <p className="card-text">
            drawings is a paper and pencil guessing arts for two or more players.
            One player thinks of a word, phrase or sentence and the other(s)
            tries to guess it by suggesting letters within a certain number of
            guesses.
          </p>
        </div>
      </div>

      <div className="card bg-dark col-sm-3 mycard">
        <a href={"/arts/piano"}>
          <img
            src="./images/piano.jpg"
            className="card-img-top card-image"
            alt="arts"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">Piano</h5>
          <p className="card-text">
          Piano from Hubery Song.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Arts;
