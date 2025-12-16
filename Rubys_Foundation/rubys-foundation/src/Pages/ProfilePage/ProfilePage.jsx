import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../Components/NavBar'
import UserProfileInformationOutPut from '../../Components/profilePage/UserProfileInformationOutPut'
import { getUsers } from '../../Services/ServicesUsers'

function ProfilePage() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUser() {
      const users = await getUsers()
      const foundUser = users.find(u => u.id === Number(id))
      setUser(foundUser)
      setLoading(false)
    }

    fetchUser()
  }, [id])

  if (loading) {
    return <p>loading profile....</p>
  }

  return (
    <div>
      <NavBar />
      {user ? (
        <UserProfileInformationOutPut user={user} />
      ) : (
        <p>User not Found</p>
      )}
    </div>
  )
}

export default ProfilePage
