import React, { Component } from 'react';
import emptyTriangle from './assets/empty-triangle.svg';
import fillTriangle from './assets/fill-triangle.svg';
import comment from './assets/comment.svg';
import './stats.css';
class Stats extends Component {
    state = {
        voted: false,
        commented: false,
        voteCount: this.props.voteCount,
        commentCount: this.props.commentCount
    }

    upvote = () => {
        //call api to POST vote
        //update number of votes
        //change state
        this.setState({ voted: true });
        //TODO later: 
    };

    comment() {
        //open input field - MODAL
    }

    render() {
        return (
            <div className="stats">
                <div onClick={this.upvote}>
                    <img className="icon" src={this.state.voted ? fillTriangle : emptyTriangle } alt="vote icon" /><span className={"triangle"} >{this.state.voteCount}</span>
                </div>
                <div>
                    <span><img className="icon" src={comment} alt="comment icon" /></span><span>{this.state.commentCount}</span>
                </div>
            </div>
        );
    }
}

export default Stats;