import React from "react"
import { NavLink } from "react-router-dom"
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
  return (
    <div className={classes.item + ' ' + classes.active}>
      <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
    </div >
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>
      {props.message}
    </div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name='Lika' id='1' />
        <DialogItem name='Michael' id='2' />

      </div>
      <div className={classes.messages}>
        <Message message='hello, how are you?' />
        <Message message='I am fine thanks' />
      </div>
    </div>
  )
}

export default Dialogs