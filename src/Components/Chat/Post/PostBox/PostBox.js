import React, { Component } from "react";
import Edit from "../Edit/Edit";
import { updatePost, deletePost } from "../../../../ducks/chatReducer";
import { connect } from "react-redux";

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
    const { key, id, username, date, time, comment, userid, user } = this.props;
    const { editing, showMasterMenu } = this.state;
    return (
      <section key={key} onClick={this.hideMasterMenu}>
        <div>
          <button onClick={this.toggleMasterMenu} />
          {user.userid === userid && (
            <div>
              <span onClick={this.showEdit}>Edit</span>
              <span onClick={() => this.deletePost(id, userid)}>Delete</span>
            </div>
          )}
        </div>

        <div>
          <div>
            <div>Profile Picture</div>
          </div>
          <span>{username}</span>
          <span>{date}</span>
          <span>{time}</span>
        </div>
        <div>
          {editing ? (
            <Edit
              comment={comment}
              id={id}
              hideEdit={this.hideEdit}
              updatePostFn={this.updatePost}
            />
          ) : (
            <span>{comment}</span>
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
