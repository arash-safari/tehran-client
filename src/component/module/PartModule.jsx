import React, {Component} from 'react';

class PartModule extends Component {
  render() {
    return (
      <div className={"part-container"}>
        <div className={"br"} />
      <div className={"part-title"}>
        {this.props.title}
      </div>
      </div>
    );
  }
}


export default PartModule;
