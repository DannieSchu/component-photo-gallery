import React from 'react'
import renderer from 'react-test-renderer';
import ImageItem from '../Molecules/ImageItem';


test('renders ImageItem.js correctly', () => {
    const tree = renderer
      .create(<ImageItem />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });