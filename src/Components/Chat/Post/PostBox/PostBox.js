import React, { Component } from "react";
import Edit from "../Edit/Edit";
import { updatePost, deletePost } from "../../../../ducks/chatReducer";
import { connect } from "react-redux";
import "./PostBox.css";

class PostBox extends Component {
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
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
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
  updatePost(id, text) {
    this.props.updatePost(id, text, this.props.locationId);
  }

  deletePost(id) {
    this.props.deletePost(id, this.props.locationId).then(() => {
      this.setState({
        editing: false
      });
    });
  }

  render() {
    const { key, id, username, time, comment, userid, user, date } = this.props;
    const { editing } = this.state;
    return (
      <section className="post__card" key={key} onClick={this.hideMasterMenu}>
        <div className="post__info__container">
          <span className="post__username">{username}</span>
          <span className="post__date">{date}</span>
          <span className="post__time">{time}</span>
        </div>

        <div className="post__edit__comment">
          {editing ? (
            <Edit
              comment={comment}
              id={id}
              hideEdit={this.hideEdit}
              updatePostFn={this.updatePost}
            />
          ) : (
            <span className="post__comment">{comment}</span>
          )}
        </div>

        <div className="post__edit__container">
          {user.userid === userid && (
            <div>
              <button className="post__edit" onClick={this.showEdit}>
                Edit
              </button>
              <button
                className="post__delete"
                onClick={() => this.deletePost(id, userid)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.chatReducer,
    ...state.userReducer
  };
};

export default connect(mapStateToProps, { updatePost, deletePost })(PostBox);
