import PT from 'prop-types'
import React from 'react'
import Block from '@qc/react-block'


function Page(props) {
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

Page.defaultProps = {
  className: '',
  compClassName: 'Page',
  compType: 'div',
}

Page.propTypes = {
  children: PT.node,
  className: PT.string,
  compClassName: PT.string,
  compType: PT.oneOf(['div', 'section']),
}

export default Page
