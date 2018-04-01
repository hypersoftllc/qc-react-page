import PT from 'prop-types'
import React from 'react'
import Block from '@qc/react-block'


function PageBody(props) {
  const domProps = {
    ...props,
    className: `${props.compClassName} ${props.className}`,
  }
  delete domProps.compClassName
  return (
    <Block {...domProps}>
      {props.children}
    </Block>
  )
}

PageBody.defaultProps = {
  className: '',
  compClassName: 'Page-Body',
  compType: 'div',
}

PageBody.propTypes = {
  children: PT.node,
  className: PT.string,
  compClassName: PT.string,
  compType: PT.oneOf(['article', 'div', 'main', 'section']),
}

export default PageBody
