import React from 'react'
// import { auth, firebase } from '../../firebase/firebase.config'
// import { useAuthState } from 'react-firebase-hooks/auth'
import Button from 'react-bootstrap/Button'
import { signInAnonymously, signOut } from '../../lib/auth'

import { AuthContext, LOGOUT_USER, SET_IS_LOADING, SET_USER } from '../../contexts/AuthContext'

const Login = () => {
  // const [user, loading, error] = useAuthState(auth)
  const { dispatch } = React.useContext(AuthContext)

  const handleLogin = () => {
    dispatch({
      type: SET_IS_LOADING,
      payload: true,
    })

    signInAnonymously()
      // .then(() => {
      //   console.log('logged in!')
      // })
      .catch(alert)
  }
  const handleLogout = () => {
    dispatch({
      type: SET_IS_LOADING,
      payload: true,
    })
    signOut()
      // .then(() => {
      //   console.log('logged out!')
      // })
      .catch(alert)
    // signInAnonymously().catch(alert)
  }

  return (
    <div className="Login">
      <Button onClick={handleLogin}>signInAnonymously</Button>
      <Button onClick={handleLogout}>SignOut</Button>
    </div>
  )
}
export default Login
