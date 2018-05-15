import React, { Component } from "react";
import Post from "./Post/Post";
import Compose from "./Compose/Compose";
import { connect } from "react-redux";
import { getPosts, deletePost, createPost } from "../../ducks/chatReducer";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import "./Chat.css";

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
      <div className="chatPage">
        <Header />
        <SideNav />
        <div className="chat__carrier">
          <div className="chat__header">
            <div className="chat__slogan">Tells us what you think!</div>
            <Compose createPostFn={this.createPostFn} locationid={locationid} />
          </div>
          <Post locationId={this.props.match.params.id} />
        </div>
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
