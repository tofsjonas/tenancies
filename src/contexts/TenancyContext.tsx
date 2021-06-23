import React, { createContext, useReducer } from 'react'
import { Tenancy } from '../types/global'

export const SET_TENANCIES = 'SET_TENANCIES'
export const ADD_TENANCY = 'ADD_TENANCY'
export const UPDATE_TENANCY = 'UPDATE_TENANCY'
export const DELETE_TENANCY = 'DELETE_TENANCY'

type State = {
  tenancies: Tenancy[]
}

type Action =
  | { type: 'SET_TENANCIES'; payload: Tenancy[] }
  | { type: 'ADD_TENANCY'; payload: Tenancy }
  | { type: 'UPDATE_TENANCY'; payload: Tenancy }
  | { type: 'DELETE_TENANCY'; payload: string }

const initialState: State = {
  tenancies: [],
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_TENANCIES:
      return { ...state, tenancies: action.payload }
    case ADD_TENANCY:
      return { ...state, tenancies: [...state.tenancies, action.payload] }
    case UPDATE_TENANCY:
      return {
        ...state,
        tenancies: state.tenancies.map((tenancy) => {
          if (tenancy.id === action.payload.id) {
            return action.payload
          } else {
            return tenancy
          }
        }),
      }
    case DELETE_TENANCY:
      return { ...state, tenancies: state.tenancies.filter((obj) => obj.id !== action.payload) }
    default:
      return state
  }
}

export type ContextType = State & {
  dispatch: React.Dispatch<Action>
}

export const TenancyContext = createContext<ContextType>({
  ...initialState,
  dispatch: () => null,
})

const TenancyProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <TenancyContext.Provider value={{ ...state, dispatch }}>{children}</TenancyContext.Provider>
}
export default TenancyProvider
