import React, { Component } from 'react';

class LikeButton extends Component {
    state = {
        likeNumber: 0
    };

    render() {
        const { likeNumber } = this.state;
        const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
        const color = colors[likeNumber % colors.length];        

        return (
            <div>
                <button
                    style={
                        { backgroundColor: color }
                    }
                    onClick={() => this.setState({ likeNumber: likeNumber + 1 })}
                >
                    {this.state.likeNumber} Likes
                </button>
            </div>
        )
    }
}

export default LikeButton