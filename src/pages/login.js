import * as React from 'react'
import { useCallback } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'
import FrankyNavbar from '../components/FrankyNavbar';

const LoginPage = withRouter(({ location }) => {
  const currentLocationState = (location.state) || { from: { pathname: '/home' },
  }

  const { keycloak } = useKeycloak();

  const login = useCallback(() => {
    return keycloak?.login()
  }, [keycloak])

  // if (keycloak?.authenticated)
  //   return <Redirect to={currentLocationState?.from} />

  console.log('auth state', keycloak?.authenticated);

  return (
    <div>
      <FrankyNavbar hideJeffbot/>

      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  )
})

export default LoginPage
