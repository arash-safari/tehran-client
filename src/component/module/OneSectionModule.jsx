import React, {Component} from 'react';
import {Link} from "react-router-dom";

class OneSectionModule extends Component {
  render() {
    return (
      <Link className="module-one-container" onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave} ref="moduleContainer" to={this.props.data.link}>
        <div className="module-one-body" ref="moduleBody" style={{width:this.props.width+"px",height:this.props.width+"px",backgroundColor:this.props.data.backgroundColor}}>
          <div className="module-one-title" ref="moduleBodyTitle">{this.props.data.title}</div>
          <div className="module-one-content" ref="moduleBodyContent">{this.props.data.content}</div>
          <footer className="module-one-footer">{this.props.data.footer}</footer>
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
    this.refs.moduleBodyContent.style.color= "grey";
    this.refs.moduleBody.style.borderTopColor="white";
    this.refs.moduleBodyTitle.style.color="wheat";

  }
}


export default OneSectionModule;
