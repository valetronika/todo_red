import React, { useState } from 'react'
import s from './Button.module.scss';
import { deleteTodo,toggleCompleted } from '../store/todoSlice';
import {setActive} from '../store/buttonsSlice'
import { useDispatch } from 'react-redux';

export default function Button({text, func, classname,active}) {
const dispatch = useDispatch();
const styles = active ? { border: "1px solid #ca6a6aa2", borderRadius: "4px" } : { border: "none" };

const handlerClick = (text) => {
  dispatch(setActive(text));
  func(); 
}

  return (
    <button onClick={()=>handlerClick(text)} style={styles}>
        {text || "button"}
    </button>
  )
}
