import React, {Component} from 'react';
import {Link} from "react-router-dom";
class PeopleModule extends Component {

  render() {
    return (
      <Link className="module-container" onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave} ref="moduleContainer" to={this.props.data.link}>
        <div className="module-header" style={{width:this.props.width+"px",height:this.props.width/2+"px"}}>
          <div className="face-background" style={{float:"right",width:this.props.width/2+"px",height:this.props.width/2+"px",backgroundImage:'url('+this.props.data.image+')'}}/>
        </div>
        <div className="module-body" ref="moduleBody" style={{width:this.props.width+"px",height:this.props.width/2+"px"}}>
          <div className="module-body-title" ref="moduleBodyTitle">{this.props.data.name}</div>
          <div className="module-body-subtitle" ref="moduleBodyContent">{this.props.data.info}</div>
        </div>
      </Link>
    );
  }
  handleMouseEnter = ()=> {

    this.refs.moduleBodyTitle.style.color="#00aeef";
    this.refs.moduleBody.style.borderTopColor="#00aeef";
    this.refs.moduleBodyContent.style.color="#00aeef";
  }

  handleMouseLeave = ()=>{
    this.refs.moduleBody.style.borderTopColor="white";
    this.refs.moduleBodyTitle.style.color="black";
    this.refs.moduleBodyContent.style.color="grey";
  }
}


export default PeopleModule;
