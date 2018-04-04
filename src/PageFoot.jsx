import PT from 'prop-types'
import React from 'react'
import Block from '@qc/react-block'


function PageFoot(props) {
  const domProps = {
    ...props,
    className: `${props.compClassName} ${props.className}`.trim(),
  }
  delete domProps.children
  delete domProps.compClassName
  return (
    <Block {...domProps}>
      {props.children}
    </Block>
  )
}

PageFoot.defaultProps = {
  className: '',
  compClassName: 'Page-Foot',
  compType: 'footer',
}

PageFoot.propTypes = {
  children: PT.node,
  className: PT.string,
  compClassName: PT.string,
  compType: PT.oneOf(['div', 'footer', 'section']),
}

export default PageFoot
