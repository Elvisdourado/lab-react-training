import React, { Component } from 'react'
import '../App.css';

export class ClickablePicture extends Component {
    state = {
        clickou: false
    }

    render() {

        return (
            <div >
                <img className='clickable'
                    src={this.state.clickou ? this.props.imgClicked : this.props.img} 
                    alt="With Glass :D"
                    onClick={() => this.setState({clickou : !this.state.clickou})}
                />
            </div>
        )
    }
}

export default ClickablePicture