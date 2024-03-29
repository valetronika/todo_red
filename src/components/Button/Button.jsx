import React, { useState } from 'react'
import s from './Button.module.scss';
import {setActive} from '../store/buttonsSlice'
import { useDispatch } from 'react-redux';

export default function Button({text, func, classname,active}) {
const dispatch = useDispatch();
const styles = active ? { border: "1px solid #ca6a6aa2", borderRadius: "4px" } : { border: "none" };

const handlerClick = (text) => {
  dispatch(setActive(text));
  func(); 
}

const idNameButton = s[classname] ?? s.button
  return (
    <button onClick={()=>handlerClick(text)} style={styles} id={idNameButton}>
        {text || "button"}
    </button>
  )
}
