import React from 'react'
import {Container} from 'components/shared'
import {Route, Switch, Redirect} from 'react-router-dom'

import SignInContainer from 'components/pages/SignIn'
import routes from 'routing/routes'
import { useSelector } from 'store'


const UnsignedLayout = () => {
  // elevate this one level higher to redirect earlier?
  const token = useSelector(({user: {token}}) => token)
  
  return (
    <Container maxWidth="xs">
      <Switch>
        { token ?
          <Redirect to={routes.signed.dashboard} /> :
          <Route exact path={routes.unsigned.signin} component={SignInContainer} />
        }
        <Redirect to={routes.unsigned.signin} />
      </Switch>
    </Container>
  )
}

export default UnsignedLayout
