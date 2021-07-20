import { firebaseApp } from './firebase/firebase.config'

export const signInAnonymously = async () => {
  // console.log('logging in!')
  await firebaseApp.auth().signInAnonymously()
}

export const signOut = async () => {
  firebaseApp.auth().signOut()
  // auth.signInAnonymously().catch(alert);
}

// const login = () => {
//   firebase.auth().signInWithEmailAndPassword('test@test.com', 'password');
// };
