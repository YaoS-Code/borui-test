import "./Home.css";
function Body() {
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
          <h5 className="card-title">Games 游戏</h5>
          <p className="card-text">
            The games I made, welcome to play.
          </p>
          <p className="card-text">
            自己设计的一些小游戏。 
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
          <h5 className="card-title">Courses 课程</h5>
          <p className="card-text">
            You will learn Coding, Math and English Here.
          </p>
          <p className="card-text">
            你可以在这里学到数学，英语以及编程的知识。
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
          <h5 className="card-title">Arts 艺术</h5>
          <p className="card-text">
            The drawing & Music Pieces from my families.
          </p>
          <p className="card-text">
            欢迎订阅，家人的作品集~
          </p>
        </div>
      </div>

    </div>
  );
}

export default Body;
