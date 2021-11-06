import React from 'react'
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

const FirebaseLogin = () => {
  return (
    <div className="fb-container">
      <StyledFirebaseAuth
        className="fb-firebaseUi"
        uiConfig={uiConfig}
        firebaseAuth={firebaseApp.auth()}
        //
      />
    </div>
  )
}
export default FirebaseLogin
