import "../App.css"
import BasePage from "../component/BasePage";

class PeoplePage extends BasePage {
  constructor(props) {
    super(props);
    this.state.relativeUrl= "people";
    this.state.header = {
      title: "title ",
      subtitle: "subtitle",
      footer: "this is header footer",
      image: "https://dam-prod.media.mit.edu/thumb/2018/08/14/DSC06021.JPG.1400x1400.jpg",
      link: ""
    };
    this.state.sections= [
        {
          key: 1,
          type:"PeopleModule",
          image: "https://dam-prod.media.mit.edu/thumb/face/vmb.800x800.jpg",
          name: "Technique can capture",
          info: "Rob Matheson | MIT News Office ",
          link: ""
        }
        , {
          key: 2,
        type:"PeopleModule",
          image: "https://dam-prod.media.mit.edu/thumb/face/fadel.800x800.jpg",
          name: "Technique can capture",
          info: "Rob Matheson | MIT News Office ",
          link: ""
        }, {
          key: 3,
        type:"PeopleModule",
          image: "https://dam-prod.media.mit.edu/thumb/face/fadel.800x800.jpg",
          name: "Technique can capture",
          info: "Rob Matheson | MIT News Office ",
          link: ""
        }
      ];
    this.state.sideNavData={
      w: 300,
      h: 300,
      mobileView: false,
      sideItems: [{link: "../home", name: "home", active: true}, {link: "../edu", name: "edu"}, {
        link: "study",
        name: "study"
      }]
    };
  }

  getFetchUrl() {
    return this.state.serverUrl + "post/" + this.props.match.params.post_id;
  }
}

export default PeoplePage;
