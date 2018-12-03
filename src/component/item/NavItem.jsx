import React, {Component} from 'react';

class NavItem extends Component {
  render() {
    if(!this.props.text) {
        return (
            <li onClick={this.props.onClick}><a><i
                className="material-icons navItem">{(this.props.active === true) ? "close" : this.props.materialIcon}</i></a>
            </li>
        );
    }else {
      return (<li ><a className="text-icon" href={this.props.href}>{this.props.text}</a>
      </li>);
    }
  }
}


export default NavItem;
