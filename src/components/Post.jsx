import React, { Component } from 'react';
import Stats from './Stats';

class Post extends Component {
    state = {
        set: true
    }
    render() {
        return (
            <div>
<Stats commentCount={2} voteCount={60} />
                <h1>{this.props.title}</h1>
                <p>
                    {this.props.description}
                </p>
                <p>
                    {this.props.timestamp} {this.props.tags}
                </p>
            </div>
        );
    }
}

export default Post;