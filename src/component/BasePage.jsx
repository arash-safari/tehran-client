import React, {Component} from 'react';
import "../App.css"
import TwoSectionModule from "./module/TwoSectionModule";
import SideNavSection from "./section/SideNavSection";
import HeaderSection from "./section/HeaderSection";
import PostSection from "./section/PostSection";
import PeopleModule from "./module/PeopleModule";
import OneSectionModule from "./module/OneSectionModule";
import PartModule from "./module/PartModule";
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class BasePage extends Component {
  state = {
    baseUrl: "http://localhost:3023/",
    relativeUrl:"",
    displayWidth: 1000,
    sectionWidth: 300,
    SectionHeight: 300,
    mobileView: false,
    header: {
      title: "header title ", subtitle: "this is a text", footer: "this is header footer",
      image: "https://dam-prod.media.mit.edu/thumb/2018/07/26/MIT-Emotion-Analysis_0.jpg.1400x1400.jpg"
    },
    sideNavItems: [{link: "./home", name: "home", active: true}, {link: "./edu", name: "edu"}, {
        link: "./study",
        name: "study"
      }],
    sideNaveProp:{
      w: 300,
      h: 300,
      mobileView: false,
    },
    sections: []
  };
  onListen =()=> {
    this.props.history.listen((location, action) => {
      this.setState({relativeUrl: ("pages/page-name?pageName=" + this.props.history.location.pathname.substr(1))},() => {
        this.fetchData();
      });
    });
  };

  getFetchUrl = ()=> {
    return this.getApiUrl() + this.state.relativeUrl;
  };
  getBaseUrl = ()=>{
    return this.state.baseUrl;
  };
  getApiUrl=()=>(this.state.baseUrl+"api/");
  componentDidMount() {
    this.mounted = true;
    this.onChangeDisplay();
    this.fetchData();
    this.onListen();
  }
  fetchData=()=>{
    fetch(this.getFetchUrl())
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          if(this.mounted){
            this.setState({
              isLoaded: true,
              sideNavItems: result.page.sideNavData  ,
              header: result.page.header,
              sections: result.page.sections,
            });
          }
        },
        (error) => {
          if(this.mounted) {
            this.setState({
              isLoaded: true,
              error: true
            });
          }
        }
      )
  };
  componentWillUnmount(){
    this.mounted = false;
  }
  setDisplaySize() {

  }

  onChangeDisplay = () => {
    let sn = this.state.sideNaveProp;
    let psw = 300;
    let displayWidth = document.body.clientWidth;
    sn.mobileView = false;
    if (displayWidth > 1000) {
      sn.w = displayWidth / 4;
      psw = displayWidth / 2 - 10;
    } else if (displayWidth > 750) {
      sn.w = displayWidth / 3;
      psw = displayWidth / 3;
    } else if (displayWidth > 500) {
      sn.w = displayWidth / 2;
      psw = displayWidth / 2 - 40;
    } else {
      sn.w = displayWidth;
      psw = displayWidth - 1;
      sn.mobileView = true;
    }
    sn.h = 2 * sn.w;
    this.setState({psw: psw, sideNaveProp: sn, displayWidth: displayWidth});
    this.setDisplaySize();
  };
  getHeaderSection = () => {
    return <HeaderSection imageUrl={this.state.header.image}
                          title={this.state.header.title} text={this.state.header.subtitle}/>;
  }
  getSideNaveSection = () => {
    return <SideNavSection items={this.state.sideNavItems} prop={this.state.sideNaveProp}/>;
  }

  render() {
    window.onresize = this.onChangeDisplay;
    return (
      <div className="main-nav-passive">
        <section className={"main"}>
          {this.getHeaderSection()}
          {this.getSideNaveSection()}
          {this.getMain()}
        </section>
      </div>
    );
  }

  getMain() {
    let sections = this.state.sections;
    let mainSection = [];
    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      if (section.type === "TwoSectionModule") {
        mainSection.push(<TwoSectionModule width={this.state.sideNaveProp.w - 0.5} key={section.key} data={section}
        />);
      } else if (section.type === "PostSection") {
        mainSection.push(<PostSection psw={this.state.psw}
                                      key={section.key}
                                      data={section.data}/>);
      } else if (section.type === "PeopleModule") {
        mainSection.push(<PeopleModule width={this.state.sideNaveProp.w - 1}
                                       key={section.key}
                                       data={section}/>);
      } else if (section.type === "OneSectionModule") {
        mainSection.push(<OneSectionModule width={this.state.sideNaveProp.w - 0.5}
                                           key={section.key}
                                           data={section}/>);
      } else if (section.type === "PartModule") {
        mainSection.push(<PartModule
          key={section.key}
          title={section.title}/>);
      }
    }
    return mainSection;
  }
}


export default BasePage;
