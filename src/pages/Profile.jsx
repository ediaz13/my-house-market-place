import React from 'react'
import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'

function Profile() {
  const [user, setUser] = useState(null)

  const auth = getAuth()
  useEffect(() => {
    setUser(auth.currentUser)
  }, [])



  return user ? <h1>{user.email}</h1> : <h1>Profile</h1>
}

export default Profile