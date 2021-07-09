import { firebase } from '../firebase/firebase.config'

export const signInAnonymously = async () => {
  console.log('logging in!')
  await firebase.auth().signInAnonymously()
}

export const signOut = async () => {
  firebase.auth().signOut()
  // auth.signInAnonymously().catch(alert);
}

// const login = () => {
//   firebase.auth().signInWithEmailAndPassword('test@test.com', 'password');
// };
