import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        return(
            <li className = "flex-column">
                <h3>{this.props.image.title}</h3>
                <div className = "image-container">
                    <img 
                        src = {this.props.image.url} 
                        alt = {this.props.image.keyword} />
                </div>
                <p>{this.props.image.description}</p>
            </li>
        )
    }
}