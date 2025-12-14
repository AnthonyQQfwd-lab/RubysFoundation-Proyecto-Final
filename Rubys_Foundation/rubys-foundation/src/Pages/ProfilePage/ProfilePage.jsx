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
    return <p>Cargando perfil...</p>
  }

  return (
    <div>
      <NavBar />
      <h1>Profile Page</h1>

      {user ? (
        <UserProfileInformationOutPut user={user} />
      ) : (
        <p>No se encontró el usuario.</p>
      )}
    </div>
  )
}

export default ProfilePage
