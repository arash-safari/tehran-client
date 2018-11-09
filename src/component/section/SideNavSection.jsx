import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import "../../App.css"

class SideNavSection extends Component {
  render() {
    if(this.props.prop.mobileView){
      return (<div className={"side-nav-bar"} style={{width: this.props.prop.w + "px", height: "56px",padding:"10px"}}>
        {
          this.props.items.map(item => {
          if (item.active) {
            return <Link key={item.link} to={item.link}
                         className={"side-nav-item-bar side-nav-active"} style={{display:"inline"}}>{item.name}</Link>
          } else {
            return <Link key={item.link} to={item.link}
                         className={"side-nav-item-bar"} style={{display:"inline"}}>{item.name}</Link>
          }
        })
        }
      </div>);
    }else{
      return (
        <div className={"side-nav"} style={{width: this.props.prop.w + "px", height: this.props.prop.h}}>
          {this.props.items.map(item => {
            if (item.active) {
              return <Link key={item.link} to={item.link}
                           className={"side-nav-item side-nav-active"}>{item.name}</Link>
            } else {
              return <Link key={item.link} to={item.link}
                           className={"side-nav-item"}>{item.name}</Link>
            }
          })}

        </div>
      );
    }
  }
}


export default SideNavSection;
