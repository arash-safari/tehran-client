import React,{Component} from 'react';
import "../../App.css"
import "../module/SidebarModule"
import SidebarItems from "../module/SidebarModule";
class SidebarSection extends Component{
  render(){
    return (
      <aside id="sidebar" className={"sidebar-nav-passive"} >
      <SidebarItems navItem={this.props.navItem}/>

      </aside>

    );
  }
}

export default SidebarSection;
