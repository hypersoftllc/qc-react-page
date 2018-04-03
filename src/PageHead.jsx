import PT from 'prop-types'
import React from 'react'
import Block from '@qc/react-block'


function PageHead(props) {
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

PageHead.defaultProps = {
  className: '',
  compClassName: 'Page-Head',
  compType: 'header',
}

PageHead.propTypes = {
  children: PT.node,
  className: PT.string,
  compClassName: PT.string,
  compType: PT.oneOf(['div', 'header', 'section']),
}

export default PageHead
