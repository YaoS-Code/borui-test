import './Game.css'
function Game() {
  return (
    <div className="container-fluid row main_cards">
      <div className="card bg-dark col-sm-2 mycard">
        <a href={"/game/hangman"}>
          <img
            src="./images/hangman.png"
            className="card-img-top card-image"
            alt="Game"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">HangMan</h5>
          <p className="card-text">
            Hangman is a paper and pencil guessing game for two or more players.
            One player thinks of a word, phrase or sentence and the other(s)
            tries to guess it by suggesting letters within a certain number of
            guesses.
          </p>
        </div>
      </div>
      <div className="card bg-dark col-sm-2 mycard">
        <a href={"/game/jump"}>
          <img
            src="./images/jump.jpg"
            className="card-img-top card-image"
            alt="Game"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">Jump</h5>
          <p className="card-text">
            自己的做的跳一跳。
          </p>
        </div>
      </div>
      <div className="card bg-dark col-sm-2 mycard">
        <a href={"/game/flappybird"}>
          <img
            src="./images/FlappyBird.png"
            className="card-img-top card-image"
            alt="Game"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">Flappy Bird</h5>
          <p className="card-text">
          Flappy Bird is a mobile game developed by Vietnamese video game artist and programmer Dong Nguyen (Vietnamese: Nguyễn Hà Đông), under his game development company
          </p>
        </div>
      </div>
      <div className="card bg-dark col-sm-2 mycard">
        <a href={"/game/arkanoid"}>
          <img
            src="./images/arkanoid.jpg"
            className="card-img-top card-image"
            alt="Game"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title text-center">Arkanoid</h5>
          <p className="card-text">
          Arkanoid is a block breaker video game. Its plot involves the starship Arkanoid being attacked by a mysterious entity from space named DOH. A small paddle-shaped craft, the Vaus, is ejected from the Arkanoid.</p>
        </div>
      </div>
    </div>
  );
}
export default Game;
