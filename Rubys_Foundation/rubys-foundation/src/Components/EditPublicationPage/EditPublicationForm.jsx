import React from 'react'
import PostPublication from '../Postpage/PostPublication'

function EditPublicationForm({ publication }) {
  return (
    <div>
      <PostPublication existingPublication={publication} />
    </div>
  )
}

export default EditPublicationForm
