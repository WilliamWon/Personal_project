import React, { Component } from "react";
import "./Compose.css";
import { connect } from "react-redux";

const moment = require("moment");

class Compose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.createPost = this.createPost.bind(this);
  }
  updateText(text) {
    this.setState({ text });
  }
  createPost() {
    const { createPostFn, username, userid, locationid } = this.props;
    const { text } = this.state;
    let time = moment().format("LT");

    createPostFn(username, text, time, userid, locationid);
    this.setState({ text: "" });
  }
  render() {
    const { text } = this.state;
    return (
      <section>
        <div>
          <div>
            <div>ProfileIcon</div>
          </div>
          <input
            placeholder="So, what do you think?"
            value={text}
            onChange={e => this.updateText(e.target.value)}
          />
        </div>
        <div>
          <button onClick={this.createPost}>Compose</button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.userReducer.user.username,
    userid: state.userReducer.user.userid
  };
};

export default connect(mapStateToProps)(Compose);