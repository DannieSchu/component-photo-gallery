import React, { Component } from 'react';
import images from './data';
import Header from './Organisms/Header';
import ImageList from './Organisms/ImageList';
// import ImageItem from './Molecules/ImageItem';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageList images = {images} />
      </div>
    )
  }
}