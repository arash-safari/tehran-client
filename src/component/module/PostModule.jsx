import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PostModule extends Component {
  render() {
    if(this.props.data.postType==="string"){
      return (
        <React.Fragment>
          <div className={"post-title"} style={{width:this.props.psw}}>
            {this.props.data.title}
          </div>
          <div className={"post-subtitle"} style={{width:this.props.psw}}>
            {this.props.data.subtitle}
          </div>
        <div className={"post-content"} style={{width:this.props.psw}}>

          {this.props.data.content}
        </div>
        </React.Fragment>
      );
    }else if(this.props.data.postType==="image"){
     return <div className="post-image" style={{backgroundImage:'url('+this.props.data.image+')',width:this.props.psw,height:this.props.psw,
       backgroundRepeat: "no-repeat",backgroundSize: "cover"}}/>
    }else if(this.props.data.postType==="button"){
      return <Link className="waves-effect waves-light btn-large black post-btn" to={this.props.data.link} >{this.props.data.buttonText}</Link>
    }
    return (
      <div>

      </div>
    );
  }
}


export default PostModule;
