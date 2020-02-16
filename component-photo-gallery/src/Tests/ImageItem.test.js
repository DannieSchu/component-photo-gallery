import React from 'react'
import renderer from 'react-test-renderer';
import ImageItem from '../Molecules/ImageItem';


test('renders ImageItem.js correctly', () => {
    const item = {}
    const tree = renderer
      .create(<ImageItem image={item}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });