import React from 'react'
import NavBar from '../../Components/NavBar'
import PostPublication from '../../Components/Postpage/PostPublication'
import UploadTables from '../../Components/UploadTables'
import '../../Styles/PostPage/PostPage.css';
function PostPage() {
  return (
    <div>
        <NavBar />
        PostPage
        <div id="postPublicationContainer">
          <PostPublication />
        </div>
        
        <UploadTables/>
    </div>
  )
}

export default PostPage