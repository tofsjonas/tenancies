import MySpinner from 'components/MySpinner'
import React, { createContext, useReducer } from 'react'
import { firebaseApp } from '../lib/firebase/firebase.config'

export const SET_USER = 'SET_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const SET_IS_LOADING = 'SET_IS_LOADING'

export type User = {
  uid?: string
  name?: string
  is_anonymous?: boolean
}

type State = {
  user: User
  is_loading?: boolean
}

type Action =
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_IS_LOADING'; payload: boolean }
  | { type: 'LOGOUT_USER' }

const initialState: State = {
  user: {
    uid: undefined,
    name: 'Guest',
    is_anonymous: false,
  },
  is_loading: true,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload, is_loading: false }
    case SET_IS_LOADING:
      return { ...state, is_loading: action.payload }
    case LOGOUT_USER:
      return { ...initialState, is_loading: false }
    default:
      return state
  }
}

export type ContextType = State & {
  dispatch: React.Dispatch<Action>
}

export const AuthContext = createContext<ContextType>({
  ...initialState,
  dispatch: () => null,
})

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  React.useEffect(() => {
    // console.log(dispatch)
    // dispatch({
    //   type: SET_IS_LOADING,
    //   payload: true,
    // })

    firebaseApp.auth().onAuthStateChanged((firebase_user) => {
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
        // const uid = firebase_user.uid
        // console.log('uid:', uid, 'isAnonymous:', firebase_user.isAnonymous)
        // ...
      } else {
        dispatch({
          type: LOGOUT_USER,
        })
      }
    })
  }, [dispatch])

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {state.is_loading && <MySpinner title="...authenticating..." />}
      {!state.is_loading && children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
