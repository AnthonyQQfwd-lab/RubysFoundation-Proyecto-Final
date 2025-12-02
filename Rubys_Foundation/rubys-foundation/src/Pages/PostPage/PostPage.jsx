import React from 'react'
import NavBar from '../../Components/NavBar'
import PostPublication from '../../Components/Postpage/PostPublication'
import UploadTables from '../../Components/UploadTables'
function PostPage() {
  return (
    <div>
        <NavBar />
        PostPage
        <PostPublication />
        <UploadTables/>
    </div>
  )
}

export default PostPage