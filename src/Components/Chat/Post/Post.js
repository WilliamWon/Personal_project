import React, { Component } from "react";
import { connect } from "react-redux";
import PostBox from "./PostBox/PostBox";

class Post extends Component {
  render() {
    console.log(this.props);
    const { posts = [], loading } = this.props;

    if (loading) {
      return <p>Getting Comments!</p>;
    }
    let postList = posts.map((post, i) => {
      return (
        <PostBox
          key={i}
          locationId={this.props.locationId}
          id={post.id}
          username={post.username}
          date={post.posting_date}
          time={post.posting_time}
          comment={post.comment}
          userid={post.userid}
        />
      );
    });
    return <section className="Post_parent">{postList}</section>;
  }
}

const mapStateToProps = state => {
  return {
    ...state.chatReducer
  };
};

export default connect(mapStateToProps)(Post);
