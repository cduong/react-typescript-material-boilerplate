import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {MuiThemeProvider} from '@material-ui/core/styles'

import {CssBaseline} from 'components/shared'
import ProtectedRoute from 'components/other/Route'
import DashboardLayout from 'components/layout/DashboardLayout'
import UnsignedLayout from 'components/layout/UnsignedLayout'
import routes from 'routing/routes'
import {useDispatch} from 'store'
import * as userActions from 'store/user/actions'
import * as userStorage from 'utils/userStorage'
import theme from 'utils/theme'

import useStyles from './styles'

const signedPaths = Object.values(routes.signed)
const unsignedPaths = Object.values(routes.unsigned)

const Root = () => {
  // Inject @global styles
  useStyles()

  // Simulate fetching of user data from localStorage
  const dispatch = useDispatch()
  const user = userStorage.get()
  if (user) {
    dispatch(userActions.set(user))
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <ProtectedRoute path={signedPaths} component={DashboardLayout} />
          <Route path={unsignedPaths} component={UnsignedLayout} />
          {/* default route */}
          <ProtectedRoute component={DashboardLayout} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default Root
