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
              <Dropdown as={ButtonGroup}>
                <Button href="/" className="button-header" variant="info">HOME 主页</Button>
              </Dropdown>  
            </li>
            <li className="nav-item">
              <Dropdown as={ButtonGroup}>
                  <Button href="/game" className="button-header" variant="info">GAME 游戏</Button>
                  <Dropdown.Toggle split variant="info" id="dropdown-split-info" />
                  <Dropdown.Menu className="bg-warning">
                    <Dropdown.Item href="/game/hangman">Hangman</Dropdown.Item>
                    <Dropdown.Item href="/game/flappybird">Flappy Bird</Dropdown.Item>
                    <Dropdown.Item href="/game/Arkanoid">Arkanoid</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>  
            </li>
            <li className="nav-item">
              <Dropdown as={ButtonGroup}>
                  <Button href="/course" className="button-header" variant="info">COURSE 课程</Button>
                  <Dropdown.Toggle split variant="info" id="dropdown-split-info" />
                  <Dropdown.Menu className="bg-warning">
                    <Dropdown.Item href="/course/coding">Coding 编程</Dropdown.Item>
                    <Dropdown.Item href="/course/math">Math 数学</Dropdown.Item>
                    <Dropdown.Item href="/course/english">English 英语</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </li>
            <li className="nav-item">
                <Dropdown as={ButtonGroup}>
                  <Button href="/arts" className="button-header" variant="info">ART 艺术</Button>
                  <Dropdown.Toggle split variant="info" id="dropdown-split-info" />
                  <Dropdown.Menu className="bg-warning">
                    <Dropdown.Item href="/arts/drawings">Drawings 绘画</Dropdown.Item>
                    <Dropdown.Item href="/arts/piano">Piano 钢琴</Dropdown.Item>
                    <Dropdown.Item href="/arts/cello">Cello 大提琴</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/about">
                ABOUT 关于
              </a> */}
              <Dropdown as={ButtonGroup}>
                  <Button href="/about" className="button-header" variant="info"> ABOUT 关于</Button>
              </Dropdown>
            </li>
          </ul>
          <form className="d-flex">
             <Dropdown as={ButtonGroup}>
                <a href="/about">
                <Button className="button-header" variant="warning" type="submit"> Login 登录</Button>
                </a>
              </Dropdown>
              <Dropdown as={ButtonGroup}>
                <a href="/about">
                <Button className="button-header" variant="success" type="submit"> Register 注册</Button>
                </a>
              </Dropdown>
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
