import React from 'react'
import renderer from 'react-test-renderer'
import Title from './Title'


describe('<Title />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create((
        <Title is1 isBold>
          Hello!
        </Title>
      ))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
