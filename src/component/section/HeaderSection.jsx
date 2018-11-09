import React,{Component} from 'react';
import "../../App.css"
class HeaderSection extends Component{
  render() {
    return <header >
      <div className={"header"}>
      <div className={"header-background-image"} style={{backgroundImage:'url('+this.props.imageUrl+')'}}/>
        <div className={"header-content"}>
          <div className={"header-title"} >{this.props.title}</div>
          <footer className={"header-footer"}>{this.props.text}</footer>
        </div>
      </div>
    </header>;
  }
}


export default HeaderSection;
