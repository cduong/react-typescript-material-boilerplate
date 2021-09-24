import React from 'react'
import {Redirect, Route as ReactRoute, RouteProps} from 'react-router-dom'

import {useSelector} from 'store'

type Props = RouteProps & {
  requiresAuth?: boolean
  inaccessibleWithToken?: boolean
}


const ProtectedRoute = ({...props}: Props) => {
  const token = useSelector(({user: {token}}) => token)

  return (
    token ? <ReactRoute {...props} /> : <Redirect to="/login" />
  );
}

export default ProtectedRoute
