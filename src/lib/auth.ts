import { firebaseApp } from './firebase/firebase.config'

export const signOut = async () => {
  firebaseApp.auth().signOut()
}
