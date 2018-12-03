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
import {serverUrl} from "../utils/const";

const history = createHistory();

class BasePage extends Component {
    state = {
        serverUrl: serverUrl,
        relativeUrl: "",
        displayWidth: 1000,
        sectionWidth: 300,
        SectionHeight: 300,
        mobileView: false,
        direction: "ltr",
        sideNaveProp: {
            w: 300,
            h: 300,
            mobileView: false,
        },
        sections: []
    };

    constructor(props) {
        super(props);
        this.fetchData();
    }

    getApiUrl = () => (this.state.serverUrl + "/api/pages/" + this.props.match.params.lang + "/" + this.props.match.params.pageName);

    componentDidMount() {
        this.mounted = true;
        this.onChangeDisplay();
    }

    fetchData = () => {
        fetch(this.getApiUrl())
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    if (this.mounted) {
                        this.setState({sideNavItems: []});
                        this.setState({direction: this.props.match.params.lang === "en" ? "ltr" : "rtl"},()=>{
                            console.log(this.state.direction);
                        });
                        this.setState({
                            isLoaded: true,
                            sideNavItems: ("labels" in result.data[1]) ? result.data[1].labels : [],
                            header: result.data[0],
                            sections: result.data.slice(2),
                        });
                    }
                },
                (error) => {
                    if (this.mounted) {
                        this.setState({
                            isLoaded: true,
                            error: true
                        });
                    }
                }
            )
    };

    componentWillUnmount() {
        this.mounted = false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.pageName !== prevProps.match.params.pageName) {
            this.fetchData();
        }
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
        if ("header" in this.state) {
            return <HeaderSection imageUrl={this.state.header.src}
                                  title={this.state.header.mainMenu} text={this.state.header.footer}/>;
        }
    };
    getSideNavSection = () => {
        if ("sideNavItems" in this.state)
            return <SideNavSection items={this.state.sideNavItems} prop={this.state.sideNaveProp}/>;
    };

    render() {
        window.onresize = this.onChangeDisplay;

        return (
            <div className="main-nav-passive">
                <div className={"main"}>
                        {this.getHeaderSection()}
                        {this.getSideNavSection()}
                    <div style={{direction: this.state.direction}}>
                        {this.getMain()}
                    </div>
                </div>
            </div>
        );
    }

    getMain() {
        let sections = this.state.sections;
        let mainSection = [];
        const lang = this.props.match.params.lang;
        for (let i = 0; i < sections.length; i++) {
            let section = sections[i];
            if (section.type === "TwoSectionModule") {
                mainSection.push(<TwoSectionModule width={this.state.sideNaveProp.w - 0.5} key={section.key} lang={lang}
                                                   data={section}
                />);
            } else if (section.type === "PostModule") {
                mainSection.push(<PostSection psw={this.state.psw}
                                              key={section.key}
                                              data={section.dataArray}/>);
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
