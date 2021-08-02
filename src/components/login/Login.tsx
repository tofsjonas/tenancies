import React from 'react' // useContext
// import Button from 'react-bootstrap/Button'
// import { signInAnonymously, signOut } from 'lib/auth'
// import { useAlert } from 'react-bootstrap-hooks-alert'
// import { useLocation, useNavigate } from 'react-router-dom'

// import { AuthContext, SET_IS_LOADING } from 'contexts/AuthContext'
// import LoginWithEmail from './LoginWithEmail'
import FirebaseLogin from './FirebaseLogin'

const Login = () => {
  // const { user, dispatch } = useContext(AuthContext)
  // const { success } = useAlert()
  // const location = useLocation()
  // const navigate = useNavigate()
  // return location.pathname;

  // console.log(location.pathname)

  // const handleSignInAnonymously = () => {
  //   dispatch({
  //     type: SET_IS_LOADING,
  //     payload: true,
  //   })

  //   signInAnonymously()
  //     .then(() => {
  //       if (location.pathname === '/login') {
  //         navigate('/')
  //       }
  //     })
  //     .catch(alert)
  // }
  // const handleLogout = () => {
  //   signOut()
  //     .then(() => {
  //       success('you have been logged out')
  //     })
  //     .catch(alert)
  // }

  return (
    <div className="login">
      <h1 className="text-center">Login</h1>
      <FirebaseLogin />
    </div>
  )
}
export default Login
