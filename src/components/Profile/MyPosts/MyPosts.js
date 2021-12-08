import React from "react";
import classes from './MyPosts.module.css'

import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>my post
      <Post message='how aree you?' />
      <Post message='my first post?' />
    </div>
  )
}

export default MyPosts