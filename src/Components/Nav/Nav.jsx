import { useRef } from "react";
import navCSS from "./../Nav/Nav.module.css";

const Nav = () => {
  const menu = useRef();
  const MenuHandler = () => {
    menu.current.classList.toggle(navCSS.showMenu);
  };
  return (
    <div className={navCSS.nav_wrapper}>
      <div className={navCSS.logo}>
        <a href="#">
          <span>Ev</span> Hub
        </a>
      </div>
      <ul ref={menu}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#feature">Feature</a>
        </li>
        <li>
          <a href="#testimo">Testimo</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={navCSS.Nav_btns}>
        <button>
          Get Started
          <i className="ri-instance-line"></i>
        </button>
        <i
          className="ri-menu-4-line"
          id={navCSS.bars}
          onClick={MenuHandler}
        ></i>
      </div>
    </div>
  );
};

export default Nav;
