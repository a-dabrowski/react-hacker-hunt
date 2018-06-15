import React, { Component } from "react";

class Topic extends Component {
  state = {
    hover: false,
    active: false
  };

  handleClick = () => {
    console.log("click handle topic");
  };

  render() {
    return (
      <div className="topic">
        <h4>
          <span role="img" aria-label="emoji">
            {this.props.emoji}{" "}
          </span>
          {this.props.name}
        </h4>
      </div>
    );
  }
}

export default Topic;
