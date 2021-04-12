import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../firebase"


const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [balance, setBalance] = useState([])

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  function claimedBalance() {
    return db.collection('users').doc(currentUser.uid).collection('wallet').add({ usd: 250, claimed: true })
  }

  function marketPurchase(currency, amount, substractAmount) {
    return db.collection('users').doc(currentUser.uid).collection('wallet').doc('7cJWWxxVNbX3Pdw1nwAZ').update({
       [currency]: amount,
       usd: substractAmount
      })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])


  useEffect(() => {
    const ref = db.collection(`users`).doc(currentUser?.uid).collection('wallet')

    ref.onSnapshot((snapshot) => {
      setBalance(snapshot.docs.map(doc => doc.data()))
    })

    return ref
  }, [balance])


  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    claimedBalance,
    balance,
    marketPurchase
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}