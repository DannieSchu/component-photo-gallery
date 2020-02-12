import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        return(
            <div className = "image-item">
                <h3>{this.props.image.title}</h3>
                <img 
                    src = {this.props.image.url} 
                    alt = "unicorn" />
                <p>{this.props.image.description}</p>
            </div>
        )
    }
}