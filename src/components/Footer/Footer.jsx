import React from 'react'
import s from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={s.footer}>
        <p className={s.footer__text}>double-click to edit</p>
        <p className={s.footer__text}>the application is written using React Redux/toolkit by <a className={s.footer__link} href="https://github.com/valetronika">valetronica</a> .</p>
        
    </div>
  )
}
