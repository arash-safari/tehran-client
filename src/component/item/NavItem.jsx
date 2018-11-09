import React, {Component} from 'react';

class NavItem extends Component {
  render() {
    return (
      <li onClick={this.props.onClick}><a ><i className="material-icons navItem">{(this.props.active===true)?"close":this.props.materialIcon}</i></a></li>
    );
  }
}


export default NavItem;
