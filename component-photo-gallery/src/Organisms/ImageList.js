import React, { Component } from 'react';
import ImageItem from '../Molecules/ImageItem'
import images from '../data';

export default class ImageList extends Component {
    render() {
    return (    
        <ul>
            {images.map((creature, index) => 
            <ImageItem image = {creature} key={`${index} - ${creature.description}`} />)}
        </ul>    
    )
}
}