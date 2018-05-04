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
  }
  updateText(text) {
    this.setState({ text });
  }

  onSubmitHandler = e => {
    e.preventDefault();
    const { createPostFn, username, userid, locationid } = this.props;
    const { text } = this.state;
    let time = moment().format("LT");
    createPostFn(username, text, time, userid, locationid);
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.onSubmitHandler}>
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
          <button>Compose</button>
        </div>
      </form>
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
