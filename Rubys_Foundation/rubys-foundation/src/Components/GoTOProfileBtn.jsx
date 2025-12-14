import React from 'react'
import { useNavigate } from 'react-router-dom'

function GoTOProfileBtn({ user }) {
  const navigate = useNavigate()

  function goToUserProfile() {
    navigate(`/profile/${user.id}`)
  }

  return (
    <button onClick={goToUserProfile}>
      Keeper: {user.firstName} {user.lastName}
    </button>
  )
}

export default GoTOProfileBtn
