import React, { Component } from "react";
import { Link } from "react-router-dom";
import Post from "./Post/Post";
import Compose from "./Compose/Compose";
import { connect } from "react-redux";
import { getPosts, deletePost, createPost } from "../../ducks/chatReducer";
import Header from "../Header/Header";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.createPostFn = this.createPostFn.bind(this);
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getPosts(id);
  }

  createPostFn(username, text, time, userid, locationid) {
    this.props
      .createPost(username, text, time, userid, locationid)
      .then(() => this.props.getPosts(this.props.match.params.id));
  }

  render() {
    console.log(this.props.posts);
    console.log(this.state.posts);
    const locationid = this.props.match.params.id;
    return (
      <div>
        <Header />
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
