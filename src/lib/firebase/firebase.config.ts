// import firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDS1Th9ZSpB5S1eiPe4FT046Wc1PljDhYo',
  authDomain: 'tenancies.firebaseapp.com',
  projectId: 'tenancies',
  storageBucket: 'tenancies.appspot.com',
  messagingSenderId: '447792445823',
  appId: '1:447792445823:web:2fa88d20bee035c3cc024a',
  measurementId: 'G-L2EL2TGPQD',
}

firebase.initializeApp(firebaseConfig)

export { firebase as firebaseApp }

export const firestore = firebase.firestore
export const auth = firebase.auth()
auth.useDeviceLanguage()
const db = firestore()
firebase.analytics()

export default db
