import "./Header.css"
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next"
// import 'flag-icon-css/css/flag-icon.min.css'
function Header() {

  const { t } = useTranslation()
  const languages = [
    {
      code: 'ca',
      name: 'English',
      country_code: 'ca'
    },
    {
      code: 'en',
      name: 'Chinese',
      country_code: 'cn'
    },
  ]


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
                <Button href="/" className="button-header" variant="info">{t('Home')}</Button>
              </Dropdown>  
            </li>
            <li className="nav-item">
              <Dropdown as={ButtonGroup}>
                  <Button href="/game" className="button-header" variant="info">{t('Game')}</Button>
                  <Dropdown.Toggle split variant="info" id="dropdown-split-info" />
                  <Dropdown.Menu className="bg-warning">
                    <Dropdown.Item href="/game/hangman">{t('Hangman')}</Dropdown.Item>
                    <Dropdown.Item href="/game/jump">{t('Jump')}</Dropdown.Item>
                    <Dropdown.Item href="/game/flappybird">{t('Flappy')}</Dropdown.Item>
                    <Dropdown.Item href="/game/Arkanoid">{t('Arkanoid')}</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>  
            </li>
            <li className="nav-item">
              <Dropdown as={ButtonGroup}>
                  <Button href="/course" className="button-header" variant="info">{t('Course')}</Button>
                  <Dropdown.Toggle split variant="info" id="dropdown-split-info" />
                  <Dropdown.Menu className="bg-warning">
                    <Dropdown.Item href="/course/coding">{t('Coding')}</Dropdown.Item>
                    <Dropdown.Item href="/course/math">{t('Math')}</Dropdown.Item>
                    <Dropdown.Item href="/course/english">{t('English')}</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </li>
            <li className="nav-item">
                <Dropdown as={ButtonGroup}>
                  <Button href="/arts" className="button-header" variant="info">{t('Art')}</Button>
                  <Dropdown.Toggle split variant="info" id="dropdown-split-info" />
                  <Dropdown.Menu className="bg-warning">
                    <Dropdown.Item href="/arts/drawings">{t('Drawings')}</Dropdown.Item>
                    <Dropdown.Item href="/arts/photography">{t('Photography')}</Dropdown.Item>
                    <Dropdown.Item href="/arts/piano">{t('Piano')}</Dropdown.Item>
                    <Dropdown.Item href="/arts/cello">{t('Cello')}</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/about">
                ABOUT 关于
              </a> */}
              <Dropdown as={ButtonGroup}>
                  <Button href="/about" className="button-header" variant="info">{t('About')}</Button>
              </Dropdown>
            </li>
          </ul>

          <div id="key" className="d-flex flex-column align-iterms-start">
              
          </div>

          <form className="d-flex">
             <Dropdown as={ButtonGroup}>
                <a href="/about">
                <Button className="button-header" variant="warning" type="submit">{t('Login')}</Button>
                </a>
              </Dropdown>
              <Dropdown as={ButtonGroup}>
                <a href="/about">
                <Button className="button-header" variant="success" type="submit">{t('Register')}</Button>
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
