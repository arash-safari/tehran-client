import "../App.css"
import BasePage from "../component/BasePage";

class HomePage extends BasePage {

  constructor(props) {
    super(props);
    this.state.relativeUrl ="home";
    this.state.sections = [{
      key: "1",
      type: "TwoSectionModule",
      widthCoe: 1,
      title: "dolar arzan shod ",
      content: "be gozaresh khabar gozari ma dolar emroz pas az farazo nashib ",
      footer: "27/5/97",
      image: "https://dam-prod.media.mit.edu/thumb/2017/02/27/ryan-e14.jpg.800x800.jpg",
      link: "post/13131"
    },
      {
        key: "2",
        type: "TwoSectionModule",
        widthCoe: 1,
        title: "noskhe jadid bazar amad",
        content: "shoma mitavanid dar ghesmate apdate in barname noskheye jadid anra ",
        footer: "29/4/97",
        image: "https://dam-prod.media.mit.edu/thumb/2018/08/14/DSC06021.JPG.800x800.jpg",
        link: "post/13132"
      },
      {
        key: "3",
        type: "TwoSectionModule",
        contentType:"video",
        widthCoe: 1,
        title: "body title ",
        content: "body content ",
        footer: "body footer",
        image: "https://dam-prod.media.mit.edu/thumb/2018/07/16/comm-bio-logo.png.800x800.png",
        link: "post/13133"
      },
      {
        key: "4",
        type: "TwoSectionModule",
        widthCoe: 1,
        title: "body title ",
        content: "body content ",
        footer: "body footer",
        image: "https://dam-prod.media.mit.edu/thumb/2018/07/26/MIT-Emotion-Analysis_0.jpg.800x800.jpg",
        link: "post/13134"
      },
      {
        key: "5",
        type: "OneSectionModule",
        widthCoe: 1,
        title: "body title ",
        content: "body content ",
        backgroundColor:"#4E342E",
        footer: "body footer",
        link: "post/13134"
      },
      {
        key: "6",
        type: "OneSectionModule",
        widthCoe: 1,
        title: "body title ",
        content: "body content ",
        backgroundColor:"#455A64",
        footer: "b  ody footer",
        link: "post/13134"
      },
      {
        key: "6",
        type: "OneSectionModule",
        widthCoe: 1,
        title: "body title ",
        content: "body content ",
        backgroundColor:"#453334",
        footer: "body footer",
        link: "post/13134"
      },
      {
        key: "6",
        type: "PartModule",
        title: "body title ",
      }
      ];
    this.state.sideNavData = {
      w: 300,
      h: 300,
      mobileView: false,
      sideItems: [{link: "home", name: "home", active: true}, {link: "edu", name: "edu"},
        {link: "study", name: "study"}, {link: "people", name: "people"},
        {link: "event", name: "event"},{link: "about", name: "about"},{link: "video", name: "video"}
        ]
    };
  }

}


export default HomePage;
