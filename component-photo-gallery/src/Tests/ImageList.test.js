import React from 'react'
import renderer from 'react-test-renderer';
import ImageList from '../Organisms/ImageList';



test('renders ImageList.js correctly', () => {
  const arr = [];
    const tree = renderer
      .create(<ImageList creatures = {arr} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });