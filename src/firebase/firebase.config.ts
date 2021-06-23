import firebase from 'firebase'

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

export const firestore = firebase.firestore

const db = firestore()
firebase.analytics()

export default db
