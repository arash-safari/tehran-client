import React, {Component} from 'react';
import "../../App.css"
class FooterSection extends Component {
  render() {
    return (
      <footer id="footer" className={"footer page-footer"}>
        <div className={"container"}>
        <div className={"row"}>
          <div className={"footer-col col s6 m4 l2"}>
            <div className={"footer-item"}>item1</div>
            <div className={"footer-item"}>item2</div>
            <div className={"footer-item"}>item3</div>
            <div className={"footer-item"}>item4</div>
            <div className={"footer-item"}>item5</div>
          </div>
          <div className={"footer-col col s6 m4 l2"}>
            <div className={"footer-item"}>item1</div>
            <div className={"footer-item"}>item2</div>
            <div className={"footer-item"}>item3</div>
          </div>
          <div className={"footer-col col s6 m4 l2"}>
            <div className={"footer-item"}>item1</div>
            <div className={"footer-item"}>item2</div>
            <div className={"footer-item"}>item3</div>
          </div>
          <div className={"footer-col col s6 m4 l2"}>

          </div>
          <div className={"footer-col col s6 m4 l2"}>

          </div>
          <div className={"footer-col col s6 m4 l2"}>
            <div className={"footer-item"}>item1</div>
            <div className={"footer-item"}>item2</div>
            <div className={"footer-item"}>item3</div>
          </div>
        </div>
        </div>
      </footer>
    );
  }
}


export default FooterSection;
