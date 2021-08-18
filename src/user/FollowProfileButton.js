import React from 'react'
import { follow, unfollow } from './apiUser';


class FollowProfileButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isFollowButton: false
         }
    }

    followClick = () => {
        this.props.onButtonClick(follow);
        this.setState({ isFollowButton: true});
    };

    unfollowClick = () => {
        this.props.onButtonClick(unfollow);
        this.setState({ isFollowButton: false});
    };
    
    render() { 
        return (
            <div className="d-inline-block mt-5">
                 {!this.props.following && isFollowButton ? (
                    <button
                        onClick={this.followClick}
                        className="btn btn-success btn-raised mr-5"
                    >
                        Follow
                    </button>
                ) : (
                    <button
                        onClick={this.unfollowClick}
                        className="btn btn-warning btn-raised"
                    >
                        UnFollow
                    </button>
                )}
            </div>
        );
    }
}

export default FollowProfileButton;