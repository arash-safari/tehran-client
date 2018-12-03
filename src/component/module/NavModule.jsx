import React, {Component} from 'react';
import NavItem from '../item/NavItem'
import {Route} from "react-router";

class NavModule extends Component {
    render() {
        const lang = (window.location.pathname.substr(1, 2)
            === "en") ? "Fa" : "En";
        const path = "/" + lang[0].toLowerCase()+lang[1] + window.location.pathname.substr(3);
        return (
            <ul className="nav-icons">
                <NavItem key={"lang"}
                         text={lang}
                         active={false}
                         href={path}/>
                {this.props.navItems.map(item => <NavItem key={item.materialIcon}
                                                          materialIcon={item.materialIcon}
                                                          active={item.active}
                                                          onClick={() => {
                                                              this.props.onClick(item)
                                                          }}
                />)}
            </ul>
        );
    }
}

export default NavModule;
