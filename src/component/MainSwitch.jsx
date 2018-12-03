import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from '../pages/HomePage'
import PostPage from '../pages/PostPage'
import './../App.css'
import PeoplePage from "../pages/PeoplePage";
import EventPage from "../pages/EventPage";
import AboutPage from "../pages/AboutPage";
import DescribePage from "../pages/DescribePage";
import {Redirect, withRouter} from "react-router";
import PropTypes from 'prop-types'

class MainSwitch extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }
  onRouteChanged() {
    console.log("ROUTE CHANGED");
  }
  render() {
    return (
      <Switch>
        <Route exact path='/:lang/:pageName' component={DescribePage}/>
        <Route exact path='/' render={() => (<Redirect to="/en/home"/>)}/>
      </Switch>
    );
  }
}
MainSwitch.propTypes = {
  location: PropTypes.object.isRequired
};
export default withRouter(MainSwitch);
