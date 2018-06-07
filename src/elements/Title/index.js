import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import { propsToHelperClasses } from '../../helpers/componentHelpers'

function getHeadingSize({ children, ...props }, defaultSize = 3) {
  const sizeKey = Object.keys(props).find(k => k.match(/is(\d)/))
  let headingSize = defaultSize
  if (sizeKey) {
    const sizeMatch = sizeKey.match(/is(\d)$/)
    headingSize = sizeMatch && sizeMatch.length >= 2 && sizeMatch[1]
  }
  if (!headingSize || headingSize > 6 || headingSize < 1) {
    headingSize = defaultSize
  }
  const Tag = `h${headingSize || defaultSize}`
  return <Tag {...props}>{children}</Tag>
}

const Title = glamorous(props => getHeadingSize(props, 3))('title', propsToHelperClasses)

Title.Subtitle = glamorous(props => getHeadingSize(props, 5))('subtitle', propsToHelperClasses)


getHeadingSize.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Title