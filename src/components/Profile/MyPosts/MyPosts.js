import React from "react";
import classes from './MyPosts.module.css'

import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>my post
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default MyPosts