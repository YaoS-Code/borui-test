import "./Header.css"
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';
// import About from '../About/About'
function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
      <div className="container-fluid header-container">
        <Button className="bg-dark logo-container" href="/">
          <img id="logo" src={"../images/logo.png"} alt="logo"/>
        </Button>
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
              {/* <a className="nav-link" aria-current="page" href="/">
                HOME 主页
              </a> */}
              <Dropdown as={ButtonGroup}>
                  <a href="/">
                  <Button className="button-header" variant="info">HOME 主页</Button>
                  </a>
                  {/* <Dropdown.Toggle split variant="info" id="dropdown-split-info" /> */}
                  {/* <Dropdown.Menu>
                    <Dropdown.Item href="#/drawings">Hangman</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Flappy Bird</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                  </Dropdown.Menu> */}
                </Dropdown>  
            </li>
            <li className="nav-item">
              <Dropdown as={ButtonGroup}>
                  <a href="/game">
                  <Button className="button-header" variant="info">GAME 游戏</Button>
                  </a>
                  <Dropdown.Toggle split variant="info" id="dropdown-split-info" />
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/drawings">Hangman</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Flappy Bird</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>  
            </li>
            <li className="nav-item">
              <Dropdown as={ButtonGroup}>
                  <a href="/course">
                  <Button className="button-header" variant="info">COURSE 课程</Button>
                  </a>
                  <Dropdown.Toggle split variant="info" id="dropdown-split-info" />
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/drawings">Coding 编程</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Math 数学</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">English 英语</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </li>
            <li className="nav-item">
                <Dropdown as={ButtonGroup}>
                  <a href="/arts">
                  <Button className="button-header" variant="info">ART 艺术</Button>
                  </a>
                  <Dropdown.Toggle split variant="info" id="dropdown-split-info" />
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/drawings">Drawings 绘画</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Piano 钢琴</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Cello 大提琴</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/about">
                ABOUT 关于
              </a> */}
              <Dropdown as={ButtonGroup}>
                  <a href="/about">
                  <Button className="button-header" variant="info"> ABOUT 关于</Button>
                  </a>
                  {/* <Dropdown.Toggle split variant="info" id="dropdown-split-info" /> */}
                  {/* <Dropdown.Menu>
                    <Dropdown.Item href="#/drawings">Drawings 绘画</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Piano 钢琴</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Cello 大提琴</Dropdown.Item>
                  </Dropdown.Menu> */}
                </Dropdown>
            </li>
          </ul>
          <form className="d-flex">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            <Dropdown as={ButtonGroup}>
                <a href="/about">
                <Button className="button-header" variant="warning" type="submit"> Login 登录</Button>
                </a>
                {/* <Dropdown.Toggle split variant="info" id="dropdown-split-info" /> */}
                {/* <Dropdown.Menu>
                  <Dropdown.Item href="#/drawings">Drawings 绘画</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Piano 钢琴</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Cello 大提琴</Dropdown.Item>
                </Dropdown.Menu> */}
              </Dropdown>
              <Dropdown as={ButtonGroup}>
                <a href="/about">
                <Button className="button-header" variant="success" type="submit"> Register 注册</Button>
                </a>
                {/* <Dropdown.Toggle split variant="info" id="dropdown-split-info" /> */}
                {/* <Dropdown.Menu>
                  <Dropdown.Item href="#/drawings">Drawings 绘画</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Piano 钢琴</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Cello 大提琴</Dropdown.Item>
                </Dropdown.Menu> */}
              </Dropdown>
            {/* <button className="btn btn-outline-primary" type="submit">
              Register
            </button>
            <button className="btn btn-outline-success" type="submit">
              Login
            </button> */}
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
