import React, { Component } from 'react';
import Stats from './Stats';

class Post extends Component {
    state = {
        set: true
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Stats commentCount={2} />
                <p>
                    {this.props.description}
                </p>
                <p>
                    <span>{this.props.timestamp}</span>
                    <span>{this.props.tags}</span>
                </p>
            </div>
        );
    }
}

export default Post;