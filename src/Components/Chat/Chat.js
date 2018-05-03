import React, { Component } from "react";
import { Link } from "react-router-dom";
import Post from "./Post/Post";
import Compose from "./Compose/Compose";
import { connect } from "react-redux";
import { getPosts, deletePost, createPost } from "../../ducks/chatReducer";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.createPostFn = this.createPostFn.bind(this);
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getPosts(id);
  }

  createPostFn(username, text, time, userid, locationid) {
    this.props.createPost(username, text, time, userid, locationid);
  }

  render() {
    const locationid = this.props.match.params.id;
    return (
      <div>
        <p>This is the Chat</p>
        <Compose createPostFn={this.createPostFn} locationid={locationid} />
        <Post locationId={this.props.match.params.id} />
        <Link to="/search">
          <button>Back To Search</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.chatReducer
  };
};
export default connect(mapStateToProps, {
  getPosts,
  deletePost,
  createPost
})(Chat);
