import React, { Component } from 'react';
import ImageItem from '../Molecules/ImageItem'

export default class ImageList extends Component {
    render() {
        const allImages = this.props.images.map(image => {
            return (
                <ImageItem image = {image} />
            )
        })
        return(
            <div>
                <p>There are {this.props.images.length} images in this array. </p>
                {allImages}
            </div>
        )
    }
}