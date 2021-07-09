import React, { useEffect, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login/Login'
import { firebase } from '../firebase/firebase.config'
// import { useAuthState } from 'react-firebase-hooks/auth'
import Spinner from 'react-bootstrap/Spinner'
import { AuthContext, LOGOUT_USER, SET_IS_LOADING, SET_USER } from '../contexts/AuthContext'
import Portfolio from './portfolio/Portfolio'

const MyRoutes = () => {
  const { user, is_loading, dispatch } = useContext(AuthContext)
  useEffect(() => {
    dispatch({
      type: SET_IS_LOADING,
      payload: true,
    })
    firebase.auth().onAuthStateChanged((firebase_user) => {
      if (firebase_user) {
        const user = {
          uid: firebase_user.uid,
          is_anonymous: firebase_user.isAnonymous,
          name: firebase_user.displayName || 'Guest',
        }
        dispatch({
          type: SET_USER,
          payload: user,
        })
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = firebase_user.uid
        console.log('uid:', uid, 'isAnonymous:', firebase_user.isAnonymous)
        // ...
      } else {
        dispatch({
          type: LOGOUT_USER,
        })
      }
    })
  }, [dispatch])

  // const [user, loading, error] = useAuthState(firebase.auth())
  // React.useEffect(() => {
  //   // console.log('loading', loading)
  //   // console.log('error', error)
  //   console.log('user', user)
  //   // console.log('isAnonymous', user?.isAnonymous)
  //   // console.log(loading, error, user?.displayName, user?.isAnonymous)
  // }, [user, loading, error])

  return (
    <>
      {user && user.uid}
      {is_loading && <Spinner animation="border" />}

      {!is_loading && (
        <Routes>
          {user && (
            <>
              <Route path="*" element={<Portfolio />} />
            </>
          )}
          {!user && (
            <>
              <Route path="*" element={<Login />} />
            </>
          )}
          {/* <Route path="/tenancies/:id" element={<Tenancy />} /> */}
          {/* <Route path="*" element={<Portfolio />} /> */}
        </Routes>
      )}
    </>
  )
}
export default MyRoutes
