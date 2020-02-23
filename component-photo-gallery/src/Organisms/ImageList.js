import React, { Component } from 'react';
import ImageItem from '../Molecules/ImageItem'

export default class ImageList extends Component {
    render() {
        const allCreatures = this.props.creatures.map((creature, index) => { 
            return (<ImageItem image = {creature} key={`${index} - ${creature.description}`} />
            )
        }
        )
    return (    
        <ul>
            {allCreatures}
            {/* {this.props.creatures.map((creature, index) => 
            <ImageItem image = {creature} key={`${index} - ${creature.description}`} />)}
            {console.log(this.props.creatures)} */}
        </ul>    
    )
}
}