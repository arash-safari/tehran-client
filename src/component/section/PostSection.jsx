import React, {Component} from 'react';
import PostModule from "../module/PostModule";

class PostSection extends Component {
  render() {
    return (<div className={"post-container"} style={{width: this.props.psw + 20 + "px"}}>
      {this.props.data.map(entity =>
      <PostModule psw={this.props.psw}
                  key={entity.key}
                  data={entity}/>)}</div>);
  }
}


export default PostSection;
