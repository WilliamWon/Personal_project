import React, { Component } from "react";
import "./Edit.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }
  updateText(val) {
    this.setState({ text: val });
  }
  updatePost(id, text) {
    this.props.updatePosts(id, text);
    hideEdit();
  }

  render() {
    const { hideEdit } = this.props;
    const { text } = this.state;

    return (
      <section>
        <textarea />
        <div>
          <button>Update</button>
          <button>Cancel</button>
        </div>
      </section>
    );
  }
}

export default Edit;
