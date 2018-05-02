import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      showMasterMenu: false
    };
    this.showEdit = this.showEdit.bind(this);
    this.hideEdit = this.hideEdit.bind(this);
    this.toggleMasterMenu = this.toggleMasterMenu.bind(this);
    this.hideMasterMenu = this.hideMasterMenu.bind(this);
  }

  showEdit() {
    this.setState({ editing: true, showMasterMenu: false });
  }

  hideEdit() {
    this.setState({ editing: false });
  }

  toggleMasterMenu() {
    this.setState({ showMasterMenu: !this.state.showMasterMenu });
  }

  hideMasterMenu() {
    if (this.state.showMasterMenu === true) {
      this.setState({ showMasterMenu: false });
    }
  }

  render() {
    console.log(this.props);
    const { posts, loading } = this.props;
    const { editing, showMasterMenu } = this.state;

    if (loading) {
      return <p>Getting Comments!</p>;
    }
    let postList = posts.map((post, i) => {
      return (
        <div key={i}>
          <div>
            <div>this is the editing pull down</div>
            <div>
              <span>Edit</span>
              <span>Delete</span>
            </div>
          </div>

          <div>
            <div>
              <div>Profile Picture</div>
            </div>
            <span>{post.username}</span>
            <span>{post.posting_date}</span>
            <span>{post.posting_time}</span>

            <p>{post.comment}</p>
          </div>
        </div>
      );
    });
    return <section className="Post_parent">{postList}</section>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.chatReducer.posts,
    loading: state.chatReducer.loading
  };
};

export default connect(mapStateToProps)(Post);
