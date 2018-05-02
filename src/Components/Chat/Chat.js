import React, { Component } from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts/Post";
import Compose from "./Compose/Compose";
import { connect } from "react-redux";
import {
  getPosts,
  updatePost,
  deletePost,
  createPost
} from "../../ducks/chatReducer";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getPosts(id);
  }

  updatePost(id, text) {
    this.props.updatePost(id);
  }

  deletePost(id) {
    this.props.deletePost(id);
  }

  createPost(username, text, time, userid, locationid) {
    this.props.createPost(username, text, time, userid, locationid);
  }

  render() {
    // const { posts } = this.props;
    // let postList = posts.map(post => {
    //   return <Post username={post.username} comment={post.comment} />;
    // });
    const locationid = this.props.match.params.id;
    return (
      <div>
        <p>This is the Chat</p>
        <Compose createPostFn={this.createPost} locationid={locationid} />
        <Posts />
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
  updatePost,
  deletePost,
  createPost
})(Chat);
