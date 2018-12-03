import React,{Component} from 'react';
import "../../App.css"
import {serverUrl} from "../../utils/const";
class HeaderSection extends Component{
  render() {
    return <header >
      <div className={"header"}>
      <div className={"header-background-image"} style={{
        background:'url('+serverUrl+'/api/containers/files/download/'
        +this.props.imageUrl+') no-repeat center',
          backgroundSize: "cover",}}/>
        <div className={"header-content"}>
          <div className={"header-title"} >{this.props.title}</div>
          <footer className={"header-footer"}>{this.props.text}</footer>
        </div>
      </div>
    </header>;
  }
}


export default HeaderSection;
