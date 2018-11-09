import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SidebarModule extends Component {
  state = {
    sideItems: [{link: "home", name: "home" }, {link: "edu", name: "edu"}, {link: "study", name: "study"}]
  }

  render() {
    if (this.props.navItem === "search") {
      return (<h1 className={"m-t-200 m-l-200"}>
        search
      </h1>);
    } else if (this.props.navItem === "person") {
      return (<h1 className={"m-t-200 m-l-200"}>
        person
      </h1>);
    } else if (this.props.navItem === "menu") {
      return (
        <div className={"m-t-200 m-l-200"}>
          {this.state.sideItems.map(item => {
            if(item.active) {
              return <Link key={item.link} to={item.link}
                           className="side-bar-item side-item-active">
                {item.name}
              </Link>
            }else{
              return <Link key={item.link} to={item.link}
                           className="side-bar-item">
                {item.name}
              </Link>
            }
          })}
        </div>
      );
    } else {
      return (<div></div>);
    }

  }
}


export default SidebarModule;
