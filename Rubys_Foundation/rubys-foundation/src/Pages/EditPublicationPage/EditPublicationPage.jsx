import React from 'react'
import { useLocation } from 'react-router-dom'
import EditPublicationForm from '../../Components/EditPublicationPage/EditPublicationForm'

function EditPublicationPage() {
  const location = useLocation()
  const publication = location.state?.publication

  return (
    <div>
      <h1>Edit Publication Page</h1>
      {publication ? (
        <EditPublicationForm publication={publication} />
      ) : (
        <p>No publication data found.</p>
      )}
    </div>
  )
}

export default EditPublicationPage
