import React from 'react'
import classnames from 'classnames'
import {Container} from '@material-ui/core'
import {ContainerProps} from '@material-ui/core/Container'

import useStyles from './styles'

type WrappedContainerProps = {
  navbar?: boolean
  padded?: boolean
} & ContainerProps<any>

const WrappedContainer = ({children, navbar, padded = true, maxWidth = 'xl', component = 'main', ...rest}: WrappedContainerProps) => {
  const {horPadding, navbarMargin} = useStyles()
  const className = classnames({
    [horPadding]: padded,
    [navbarMargin]: navbar
  })

  return (
    <Container {...rest} className={className} component={component} maxWidth={maxWidth}>
      {children}
    </Container>
  )
}

export default WrappedContainer
