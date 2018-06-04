import React from "react"

import { propsToHelperClasses } from '../../helpers/componentHelpers'

const Hero = ({ children, style, ...props }) => (
  <div style={style} className={`hero ${propsToHelperClasses(props)}`}>
    {children}
  </div>
)

Hero.Image = ({ children, image, style, ...props }) => (
  <Hero
    style={{
      background: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      ...style
    }}
    {...props}
  >
    {children}
  </Hero>
)

Hero.Cover = ({ style, ...props }) => (
  <div
    style={{
      background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
    {...props}
  />
)

Hero.Body = ({ children, style, ...props }) => (
  <div
    style={style}
    className={`hero-body ${propsToHelperClasses(props)}`}
    {...props}
  >
    <div className="container">{children}</div>
  </div>
)

Hero.Title = ({ children }) => <h1 className="title">{children}</h1>

Hero.Subtitle = ({ children }) => <h2 className="subtitle">{children}</h2>

Hero.CallToAction = ({ children, ...props }) => (
  <a className={`button is-black is-inverted is-outlined ${propsToHelperClasses(props)}`} {...props}>
    {children}
  </a>
)

export default Hero
