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
      <div className="compose__container">
        <form className="composer" onSubmit={this.onSubmitHandler}>
          <div className="compose__username__container">
            <div className="compose__username">{`${this.props.username}`}</div>
          </div>
          <div className="compose__input__container">
            <input
              className="compose__input"
              placeholder="So, what do you think?"
              value={text}
              onChange={e => this.updateText(e.target.value)}
            />
          </div>
          <div>
            <button className="compose__button">Compose</button>
          </div>
        </form>
      </div>
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
