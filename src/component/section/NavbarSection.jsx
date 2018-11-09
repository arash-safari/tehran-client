import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import NavModule from '../module/NavModule'
import '../../App.css'
import TweenMax from 'gsap';

class NavbarSection extends Component {

  onScroll() {
    const nav = document.getElementsByTagName("nav")[0];
    const navLogo = document.getElementsByClassName("nav-logo")[0];
    const navItem = document.getElementsByClassName("material-icons");

    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      if (nav.style.backgroundColor !== "white") {
        nav.style.backgroundColor = "white";
        navLogo.classList.add("blackColor");
        for (let i = 0; i < navItem.length; i++) {
          navItem[i].classList.add("blackColor");
        }
        let animTime = 0.5;
        TweenMax.to("nav", animTime, {height: "64px"});
        TweenMax.to(".nav-wrapper", animTime, {height: "64px"});
        TweenMax.to(".nav-icons", animTime, {top: "0", right: "0"});
        TweenMax.to(".nav-logo", animTime, {top: "0", left: "0"});
      }
    } else {
      if (nav.style.backgroundColor === "white") {
        nav.style.backgroundColor = "transparent";
        navLogo.classList.remove("blackColor");
        for (let i = 0; i < navItem.length; i++) {
          navItem[i].classList.remove("blackColor");
        }
        let animTime = 0.5;
        TweenMax.to("nav", animTime, {height: "150px"});
        TweenMax.to(".nav-wrapper", animTime, {height: "150px"});
        TweenMax.to(".nav-icons", animTime, {top: "60", right: "60"});
        TweenMax.to(".nav-logo", animTime, {top: "60", left: "60"});
      }
    }
  }

  render() {
    window.onscroll = this.onScroll;
    return <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <Link to="/home" className="nav-logo">Logo</Link>
          <NavModule onClick={(item) => {
            this.props.onClick(item)
          }} navItems={this.props.navItems}/>
        </div>
      </nav>
    </div>
  };
}

export default NavbarSection;
