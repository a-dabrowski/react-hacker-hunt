import React, { Component } from "react";
import Stats from "./Stats";
import "./post.css";

class Post extends Component {
  state = {
    set: true
  };
  render() {
    return (
      <div className="news">
        <Stats commentCount={2} voteCount={60} />
        <div>
          <h1 className="news__title">{this.props.title}</h1>
          <p className="news__description">{this.props.description}</p>
          <p className="news__metadata">
            {this.props.timestamp} hours ago by {this.props.author} <div className="news__tags">{this.props.tags}</div>
          </p>
        </div>
      </div>
    );
  }
}

export default Post;
