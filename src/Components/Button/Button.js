import React from 'react'

import {Link} from 'react-router-dom'

import style from "./button.module.css"

const Button = (props) => {
    return (
        <div className={style.button__container}>
            <Link to={props.path1}>
                <div className={style.reserv__button + " " + style.button__btn}>
                    <div className={style.button__img}>
                        <img src={props.img1} alt="" className={style.reserv__button_img}/>
                    </div>
                    <p className={style.reserv__button_text}>{props.title1}</p>
                </div>
            </Link>
            <Link to={props.path2}>
                <div className={style.docs__button + " " +  style.button__btn}>
                    <div className={style.button__img}>
                        <img src={props.img2} alt="" className={style.docs__button_img}/>
                    </div>
                    <p className={style.docs__button_text}>{props.title2}</p>
                </div>
            </Link>
        </div>
   
    )
}

export default Button
