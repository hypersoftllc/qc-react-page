import PT from 'prop-types'
import React from 'react'
import Block from '@qc/react-block'


function PageSidebar(props) {
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

PageSidebar.defaultProps = {
  className: '',
  compClassName: 'Page-Sidebar',
  compType: 'aside',
}

PageSidebar.propTypes = {
  children: PT.node,
  className: PT.string,
  compClassName: PT.string,
  compType: PT.oneOf(['aside', 'div', 'section']),
}

export default PageSidebar
