import React from "react";
import classes from './Post.module.css'
import ava from '../../../../assets/img/ava.jpg'

const Post = () => {
  return (
    <div className={classes.item}>
      <div className={classes.text}>
        <img src={ava} alt="avatar" />
        <span>My first post</span>
      </div>
      <div className={classes.icon}>
        <i class="far fa-heart"></i>
      </div>
    </div>
  )
}

export default Post