import React, { useState, useEffect } from 'react'
import { firebaseApp } from 'lib/firebase/firebase.config'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { auth as firebaseuiAuth } from 'firebaseui'

// Styles
import './login.css' // This uses CSS modules.
import './firebaseui-styling.global.css' // Import globally.

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebaseuiAuth.AnonymousAuthProvider.PROVIDER_ID,
    firebaseApp.auth.EmailAuthProvider.PROVIDER_ID,
    // firebaseApp.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseApp.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebaseApp.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebaseApp.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebaseApp.auth.GithubAuthProvider.PROVIDER_ID,
    // firebaseApp.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
}

type func = () => void

const FirebaseLogin = () => {
  const [is_logged_in, setIsLoggedIn] = useState(false)

  const unregisterAuthObserver = React.useRef<func>(() => {})

  useEffect(() => {
    unregisterAuthObserver.current = firebaseApp.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(!!user)
    })
    return () => {
      unregisterAuthObserver.current()
    }
  }, [])

  return (
    <div className="fb-container">
      {!is_logged_in && (
        <div>
          <StyledFirebaseAuth
            className="fb-firebaseUi"
            uiConfig={uiConfig}
            firebaseAuth={firebaseApp.auth()}
            //
          />
        </div>
      )}
      {is_logged_in && (
        <div className="fb-signedIn">
          {/* Hello {firebaseApp.auth().currentUser ? firebaseApp.auth().currentUser.displayName : ''}.  */}
          You are now signed In!
          <a className="fb-button" onClick={() => firebaseApp.auth().signOut()}>
            Sign-out
          </a>
        </div>
      )}
    </div>
  )
}
export default FirebaseLogin
