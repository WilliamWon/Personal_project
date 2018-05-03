import React, { Component } from "react";
import "./Edit.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.comment
    };
    this.updatePost = this.updatePost.bind(this);
  }
  updateText(val) {
    console.log(val);
    this.setState({ text: val });
  }
  updatePost() {
    const { text } = this.state;
    const { id, hideEdit, updatePostFn } = this.props;
    updatePostFn(id, text);
    hideEdit();
  }

  render() {
    const { hideEdit } = this.props;
    const { text } = this.state;

    return (
      <section>
        <textarea
          value={text}
          onChange={e => this.updateText(e.target.value)}
        />
        <div>
          <button onClick={this.updatePost}>Update</button>
          <button onClick={hideEdit}>Cancel</button>
        </div>
      </section>
    );
  }
}

export default Edit;
