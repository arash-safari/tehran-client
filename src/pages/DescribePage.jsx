import "../App.css"
import BasePage from "../component/BasePage";

class DescribePage extends BasePage {
  constructor(props) {
    super(props);
    this.state.relativeUrl= "pages/page-name?pageName=" + props.match.params.pageName;
    // this.state.header = {
    //   title: "title ",
    //   subtitle: "subtitle",
    //   footer: "this is header footer",
    //   image: "https://dam-prod.media.mit.edu/thumb/2018/08/14/DSC06021.JPG.1400x1400.jpg",
    // };
    // this.state.sections = [{
    //   type: "PostSection",
    //   key:1,
    //   data: [
    //     {
    //       key: 1,
    //       type: "PostSection",
    //       postType: "string",
    //       title: "Technique can capture a scene at multiple depths with one shutter click—no zoom lens needed",
    //       subtitle: "Rob Matheson | MIT News Office ",
    //       content: "Specifically, the researchers designed new optics for an ultrafast sensor called a streak camera that resolves images from ultrashort pulses of light. Streak cameras and other ultrafast cameras have been used to make a trillion-frame-per-second video, scan through closed books, and provide depth map of a 3-D scene, among other applications. Such cameras have relied on conventional optics, which have various design constraints. For example, a lens with a given focal length, measured in millimeters or centimeters, has to sit at a distance from an imaging sensor equal to or greater than that focal length to capture an image. This basically means the lenses must be very long."
    //     }
    //     , {
    //       key: 2,
    //       type: "PostModule",
    //       postType: "image",
    //       image: "https://dam-prod.media.mit.edu/thumb/2018/07/26/MIT-Emotion-Analysis_0.jpg.800x800.jpg"
    //     }, {
    //       key: 3,
    //       type: "PostModule",
    //       postType: "button",
    //       link: "../home",
    //       buttonText:"home"
    //     }
    //   ]
    // }];
    // this.state.sideNavData = {
    //   w: 300,
    //   h: 300,
    //   mobileView: false,
    //   sideItems: [{link: "../home", name: "home", active: true}, {link: "../edu", name: "edu"}, {
    //     link: "../study",
    //     name: "study"
    //   }]
    // };
  }
}

export default DescribePage;
