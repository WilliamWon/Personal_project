import React, { Component } from "react";
import "./RecCard4.css";
import { Link } from "react-router-dom";

class RecCard4 extends Component {
  render() {
    const { name, address, rating, id } = this.props;
    return (
      <div>
        <div>{name}</div>
        <div>{address}</div>
        <div>{`Rating: ${rating}`}</div>
        <Link to={`/chat/${id}`}>
          <button>Chat</button>
        </Link>
        <button>Favorite</button>
      </div>
    );
  }
}

export default RecCard4;
