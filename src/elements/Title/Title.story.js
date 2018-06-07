import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-router'
import Title from './'

storiesOf('Elements', module)
  .addDecorator(StoryRouter())
  .add('Title', () => (
    <Title is9>Hello, cruel world</Title>
  ))
  .add('Subtitle', () => (
    <Title.Subtitle is9>Subtitle, size 1</Title.Subtitle>
  ))
