import React, { createContext, useReducer } from 'react'

export const SET_USER = 'SET_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const SET_IS_LOADING = 'SET_IS_LOADING'

export type User = {
  uid?: string
  name?: string
  is_anonymous?: boolean
}

type State = {
  user?: User
  is_loading?: boolean
}

type Action =
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_IS_LOADING'; payload: boolean }
  | { type: 'LOGOUT_USER' }

const initialState: State = {
  is_loading: false,
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

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>
}
export default AuthProvider
