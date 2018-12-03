import React, {Component} from 'react';
import MainSwitch from './component/MainSwitch'
import NavbarSection from './component/section/NavbarSection'
import './App.css'
import SidebarSection from './component/section/SidebarSection'
import TweenMax from 'gsap';
import TimelineMax from 'gsap/TimelineMax'
import FooterSection from "./component/section/FooterSection";

class App extends Component {
    state = {
        navItems: [
            {materialIcon: "search", active: false},
            {materialIcon: "person", active: false},
            {materialIcon: "menu", active: false}],
        lang: ""
    };
    navItemClick = (clickedIcon) => {
        const main = document.getElementById("main");
        const sidebar = document.getElementById("sidebar");
        const newItems = this.state.navItems;
        const navLogo = document.getElementsByClassName("nav-logo")[0];
        const navIs = document.getElementsByClassName("material-icons");
        const textIcons = document.getElementsByClassName("text-icon");
        const nav = document.getElementsByTagName("nav")[0];
        const html = document.getElementsByTagName("html")[0];
        let timeLine = new TimelineMax({onComplete: this.afterCloseNav})
        for (let i = 0; i < newItems.length; i++) {
            if (newItems[i] === clickedIcon) {
                newItems[i].active = !newItems[i].active;
                if (newItems[i].active) {
                    if (main.classList.contains('main-nav-passive'))
                        main.classList.remove('main-nav-passive');
                    if (!main.classList.contains('main-nav-active'))
                        main.classList.add('main-nav-active');
                    if (sidebar.classList.contains('sidebar-nav-passive'))
                        sidebar.classList.remove('sidebar-nav-passive');
                    if (!sidebar.classList.contains('sidebar-nav-active'))
                        sidebar.classList.add('sidebar-nav-active');
                    html.style.overflowY = "hidden";
                    TweenMax.to(".sidebar-nav-active", 0.3, {right: "0vw"});
                    TweenMax.to(".main-nav-active", 0.3, {marginLeft: "-50vw"});

                    if (nav.style.backgroundColor !== "white") {
                        navLogo.classList.add("blackColor");
                        for (let i = 0; i < navIs.length; i++) {
                            navIs[i].classList.add("blackColor");
                        }
                        for (let i = 0; i < textIcons.length; i++) {
                            textIcons[i].classList.add("blackColor");
                        }
                    }
                } else {

                    timeLine.to(".main-nav-active", 0.3, {marginLeft: "0vw"});
                    timeLine.to(".sidebar-nav-active", 0.3, {right: "-50vw"});
                    html.style.overflowY = "auto"
                    if (nav.style.backgroundColor !== "white") {
                        navLogo.classList.remove("blackColor");
                        for (let i = 0; i < navIs.length; i++) {
                            navIs[i].classList.remove("blackColor");
                        }
                        for (let i = 0; i < textIcons.length; i++) {
                            textIcons[i].classList.remove("blackColor");
                        }
                    }

                }
            } else {
                newItems[i].active = false;
            }
        }
        this.setState({icons: newItems});
    };
    handellangClick = () => {
        if (this.state.lang === "En") {
            this.setState({lang: "Fa"});
        } else {
            this.setState({lang: "En"});
        }
    };

    navActive() {
        const newItems = this.state.navItems;
        for (let i = 0; i < newItems.length; i++) {
            if (newItems[i].active) {
                return newItems[i].materialIcon;
            }
        }
    }

    render() {
        return <div>
            <NavbarSection onClick={(item) => {
                this.navItemClick(item)
            }} navItems={this.state.navItems} />
            <div id="main" className={"main-nav-passive"}>
            <MainSwitch>
            </MainSwitch>
                <FooterSection/>
            </div>

            <SidebarSection navItem={this.navActive()}/>
        </div>;
    }

    afterCloseNav = () => {
        const main = document.getElementById("main");
        const sidebar = document.getElementById("sidebar");
        const newItems = this.state.navItems;
        for (let i = 0; i < newItems.length; i++) {
            if (newItems[i].active) {
                return;
            }
        }
        if (main.classList.contains('main-nav-active'))
            main.classList.remove('main-nav-active');
        if (!main.classList.contains('main-nav-passive'))
            main.classList.add('main-nav-passive');
        if (sidebar.classList.contains('sidebar-nav-active'))
            sidebar.classList.remove('sidebar-nav-active');
        if (!sidebar.classList.add('sidebar-nav-passive'))
            sidebar.classList.add('sidebar-nav-passive');
    }
}

export default App;
