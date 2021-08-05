import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login/Login'
import Spinner from 'react-bootstrap/Spinner'
import { AuthContext } from '../contexts/AuthContext'
import Portfolio from './portfolio/Portfolio'

const MyRoutes = () => {
  const { user, is_loading } = useContext(AuthContext)

  return (
    <>
      {/* {user && user.uid} */}
      {is_loading && (
        <>
          <Spinner animation="border" /> ...authenticating...
        </>
      )}
      {!is_loading && (
        <Routes>
          {user && user.uid && (
            <>
              {/* {(!user.uid || user.is_anonymous) && <Route path="login" element={<Login />} />} */}
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Portfolio />} />
            </>
          )}
          {(!user || !user.uid) && (
            <>
              <Route path="*" element={<Login />} />
            </>
          )}
        </Routes>
      )}
    </>
  )
}
export default MyRoutes
