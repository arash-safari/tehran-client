import React, {Component} from 'react';
import NavItem from '../item/NavItem'

class NavModule extends Component {

  render() {
    return (
      <ul className="nav-icons">
        {this.props.navItems.map(item => <NavItem key = {item.materialIcon}
                                                  materialIcon={item.materialIcon}
                                                  active= {item.active}
                                                  onClick = {()=>{this.props.onClick(item)}}
        />)}
      </ul>
    );
  }
}

export default NavModule;
