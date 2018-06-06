import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Stats extends Component {
    state = {
        voted: false,
        commented: false,
        voteCount: this.props.voteCount,
        commentCount: this.props.commentCount
    }

    upvote() {
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
            <div>
                <div>
                    <span>up ICON</span><span onClick={this.upvote}>{this.state.voteCount}</span>
                </div>
                <div>
                    <span>comment Icon</span><span>{commentCount}</span>
                </div>
            </div>
        );
    }
}

export default Stats;