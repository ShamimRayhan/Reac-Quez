import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import '../firebase'
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const auth = getAuth()

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false)
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])
  
  async function signup(email, password, userName) {
    const auth = getAuth()

    
    await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(auth.currentUser, { displayName: userName })

    const user = auth.currentUser

    setCurrentUser({
      ...user,
    })
  }
  async function logout() {
    const auth = getAuth()
    return await signOut(auth)
  }

  async function login(email, password) {
    const auth = getAuth()
    return await signInWithEmailAndPassword(auth, email, password)
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
