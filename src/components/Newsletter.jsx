import React, {Component} from 'react';

class Newsletter extends Component {
    render () {
        return (
            <div>
                <h5>Get high on categorized Show HN contributions</h5>

                <p>
                    We know the struggle. A lot of great stuff on Hacker News gets lost in crowd.
                </p>
                <p>
                    Get the weekly top HN posts to your inbox
                </p>
                <textarea placeholder="Your mail"></textarea>
                <button>Subscribe</button>
            </div>
        );
    }
}

export default Newsletter;