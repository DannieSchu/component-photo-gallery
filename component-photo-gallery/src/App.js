import React, { Component } from 'react';
import images from './data';
import Header from './Organisms/Header';
import ImageList from './Organisms/ImageList';
import './App.css';
import './index.css';

export default class App extends Component {
  state = { selected: null };

  render() {
    const handleChange = e => {
      this.setState(
        { selected: e.target.value }
        )
    }
    const filteredCreatures = images.filter(image => {
      if (!this.state.selected) return true;
      return image.keyword === this.state.selected;
    }); 
    return (
      <div className="App">
          <Header />
          <main>
            <select className = "creature-options" onChange={handleChange}>
                <option value="default-value">All Types</option>
                <option value="narwhal">Narwhal</option>
                <option value="unicorn">Unicorn</option>
                <option value="rhino">Rhino</option>
                <option value="triceratops">Triceratops</option>
                <option value="markhor">Markhor</option>
                <option value="mouflon">Mouflon</option>
                <option value="addax">Addax</option>
                <option value="chameleon">Chameleon</option>
                <option value="lizard">Lizard</option>
                <option value="dragon">Dragon</option>
            </select>
            <section className = "creatures-display">
              <ImageList creatures = {filteredCreatures} />
            </section>
          </main>
      </div>
    )
  }
}
