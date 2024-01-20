import React from 'react'
import s from './FilterFooter.module.scss';
import {showActive,showAll,clearAllCompleted,showCompleted} from '../store/todoSlice'
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';


export default function FilterFooter() {
    const statedata = useSelector(state => state.todosRedusers);
    const buttons = useSelector((state) => state.buttonsSlice.buttons);
    const dispatch = useDispatch();
    const handleSchowActive = ()=>{
        dispatch(showActive())
    };
    
  return (
    <div className={s.footer}>
        <div className={s.footer__buttons}>
            <Button text={buttons[1].name} func={handleSchowActive} active={buttons[1].isActive}/>
            <Button text={buttons[2].name} func={()=>dispatch(showCompleted())} active={buttons[2].isActive}/>
            <Button text={buttons[0].name} func={()=>dispatch(showAll())} active={buttons[0].isActive}/>
        </div>
        <Button text={'clear completed'} func={()=>dispatch(clearAllCompleted())}/>

    </div>
  )
}
