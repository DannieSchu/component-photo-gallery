import React, { Component } from 'react';
import ImageItem from '../Molecules/ImageItem'

export default class ImageList extends Component {
    render() {
        const imageNode = this.props.filteredCreatures.map(image => <ImageItem image = {image} />
    );
    return (        
        <ul>{ imageNode }</ul>
    )
}
}