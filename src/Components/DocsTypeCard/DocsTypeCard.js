import React from 'react'

import style from "./DocsTypeCard.module.css"

const DocsTypeCard = (props) => {
  return (
    <div className={style.container}>
      <div className={style.visaType}>
        <h2 className={style.visaTitle}>{props.visa}</h2>
      </div>
      <div className={style.btnContainer}>
        <button className={style.idCard_btn + " " + style.button__btn}>id card</button>
        <button className={style.extension_btn + " " + style.button__btn}>Продление</button>
      </div>
    </div>
  )
}

export default DocsTypeCard
