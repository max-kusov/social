import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.img} />
      <div>ava + descr </div>
      <MyPosts />
    </div>
  )
}

export default Profile