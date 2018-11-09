import React, {Component} from 'react';
import {Link} from "react-router-dom";

class TwoSectionModule extends Component {
  render() {
    if (this.props.data.contentType !== "video") {
      return (
        <Link className="module-container" onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave} ref="moduleContainer" to={this.props.data.link}>
          <div className="module-header" style={{
            width: (this.props.width * this.props.data.widthCoe) + "px",
            height: (this.props.width * this.props.data.widthCoe) + "px",
            backgroundImage: 'url(' + this.props.data.image + ')'
          }}>
            <div className="module-background"/>
          </div>
          <div className="module-body" ref="moduleBody"
               style={{width: (this.props.width * this.props.data.widthCoe) + "px", height: (this.props.width) + "px"}}>
            <div className="module-body-title" ref="moduleBodyTitle">{this.props.data.title}</div>
            <div className="module-body-content" ref="moduleBodyContent">{this.props.data.content}</div>
            <footer className="module-body-footer">{this.props.data.footer}</footer>
          </div>
        </Link>
      );
    } else {
      return (
        <Link className="module-container" onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave} ref="moduleContainer" to={this.props.data.link}>
          <div className="module-header" style={{
            width: (this.props.width * this.props.data.widthCoe) + "px",
            height: (this.props.width * this.props.data.widthCoe) + "px",
            backgroundImage: 'url(' + this.props.data.image + ')'
          }}>
            <div className="module-background">
              <div className="center">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                  <g opacity="0.4">
                    <rect x="10" y="10" width="80" height="80"/>
                  </g>
                  <g opacity="0.2">
                      <polygon fill="#231F20" points="91,92 8,92 8,9 9,9 9,91 91,91 	"/>
                  </g>
                  <path fill="#FFFFFF" d="M92,91H9V8h83V91z M12,88h77V11H12V88z"/>
                  <path fill="#FFFFFF" d="M69.829,61.395c0,0.308-0.176,0.616-0.484,0.748c-0.088,0.044-0.22,0.044-0.308,0.044 c-0.22,0-0.396-0.088-0.572-0.22l-8.135-8.18v6.025c0,1.319-1.056,2.375-2.375,2.375H34.208c-1.319,0-2.375-1.056-2.375-2.375 V40.814c0-1.319,1.055-2.375,2.375-2.375h23.747c1.319,0,2.375,1.056,2.375,2.375v6.025l8.135-8.18 c0.22-0.22,0.572-0.264,0.879-0.176c0.308,0.132,0.484,0.44,0.484,0.748V61.395z"/>
              </svg>
              </div>
            </div>
          </div>
          <div className="module-body" ref="moduleBody"
               style={{width: (this.props.width * this.props.data.widthCoe) + "px", height: (this.props.width) + "px"}}>
            <div className="module-body-title" ref="moduleBodyTitle">{this.props.data.title}</div>
            <div className="module-body-content" ref="moduleBodyContent">{this.props.data.content}</div>
            <footer className="module-body-footer">{this.props.data.footer}</footer>
          </div>
        </Link>
      );
    }
  }

  handleMouseEnter = () => {

    this.refs.moduleBodyTitle.style.color = "#00aeef";
    this.refs.moduleBody.style.borderTopColor = "#00aeef";
    this.refs.moduleBodyContent.style.color = "#00aeef";
  }

  handleMouseLeave = () => {
    this.refs.moduleBody.style.borderTopColor = "white";
    this.refs.moduleBodyTitle.style.color = "black";
    this.refs.moduleBodyContent.style.color = "grey";
  }
}


export default TwoSectionModule;
