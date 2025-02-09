import React from 'react'
import Post from './Post'
import posts from '../setupTests'
export default function Posts() {
  return (
    <div>
      {posts.map(post=><Post post={post}/>)}
    </div>
  )
}
