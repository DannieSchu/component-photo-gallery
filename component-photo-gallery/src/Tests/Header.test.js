import React from 'react'
import renderer from 'react-test-renderer';
import Header from '../Organisms/Header';


test('renders Header.js correctly', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });