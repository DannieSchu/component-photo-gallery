import React, { Component } from 'react';
import ImageItem from '../Molecules/ImageItem'

export default class ImageList extends Component {
    render() {
        const imageNodes = this.props.images.map(image => <ImageItem image = {image} />
    );
    return (        
        <ul imageNodes = "flex-row" > { imageNodes }</ul>
    )
}
}