import React, { Component } from 'react';

export default class ImageList extends Component {
    render() {
        return(
            <div>
                <p>There are {this.props.images.length} images in this array. </p>
                <p>Here's the first: </p>
                <img src = {this.props.images[0].url} />
            </div>
        )
    }
}