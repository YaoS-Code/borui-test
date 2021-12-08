import "./Header.css"
function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Borui
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                HOME 主页
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/game">
                GAME 游戏
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/course">
                COURSE 课程
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/art">
                ART 艺术
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                ABOUT 关于
              </a>
            </li>
          </ul>
          <form className="d-flex">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            <button className="btn btn-outline-primary" type="submit">
              Register
            </button>
            <button className="btn btn-outline-success" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div className="jumbotron">

    </div>
    </div>
  );
}

export default Header;
