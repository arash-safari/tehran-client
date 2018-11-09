import "../App.css"
import BasePage from "../component/BasePage";

class EventPage extends BasePage {
  constructor(props) {
    super(props);
    this.state.relativeUrl= "event";
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
          widthCoe: 1,
          type:"TwoSectionModule",
          title: "noskhe jadid bazar amad",
          content: "shoma mitavanid dar ghesmate apdate in barname noskheye jadid anra ",
          footer: "29/4/97",
          image: "https://dam-prod.media.mit.edu/thumb/face/vmb.800x800.jpg",
          link: ""
        }
        , {
          key: 2,
          widthCoe: 1,
          type:"TwoSectionModule",
        title: "noskhe jadid bazar amad",
        content: "shoma mitavanid dar ghesmate apdate in barname noskheye jadid anra ",
        footer: "29/4/97",
        image: "https://dam-prod.media.mit.edu/thumb/face/fadel.800x800.jpg",
          link: ""
        }, {
          key: 3,
          widthCoe: 1,
          type:"TwoSectionModule",
        title: "noskhe jadid bazar amad",
        content: "shoma mitavanid dar ghesmate apdate in barname noskheye jadid anra ",
        footer: "29/4/97",
        image: "https://dam-prod.media.mit.edu/thumb/face/fadel.800x800.jpg",
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

}

export default EventPage;
