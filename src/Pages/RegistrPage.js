import React from 'react'

const RegistrPage = () => {
  return (
    <div>
        <div className="text-container">
            <p className="text-text">
                Culpa ullamco reprehenderit commodo do aute deserunt ipsum irure esse deserunt minim dolor non. Laboris sint incididunt ea veniam dolor ad ipsum laboris mollit exercitation occaecat ea. Sint nisi culpa minim laboris occaecat pariatur consequat magna quis. Ipsum sit eu qui fugiat officia ipsum velit est in exercitation do deserunt. Adipisicing esse consectetur sit in aliquip mollit veniam. Non anim officia reprehenderit ipsum exercitation. Dolore consequat eiusmod magna ipsum sit Lorem fugiat ut elit nulla.
            </p>
        </div>
        <div className="login__form">
            <div className="fields">
                <div className="login__field field">
                    <label className="text-field__label" for="name">Ф.И.О.</label>
                    <input className="text-field__input" type="text" name="name" id="name" placeholder="Как Вас зовут?" />
                </div>
                <div className="login__field field">
                    <label className="text-field__label" for="login">Логин</label>
                    <input className="text-field__input" type="text" name="login" id="login" placeholder="Login" />
                </div>
                <div className="password__field field">
                    <label className="text-field__label" for="password">Пароль</label>
                    <input className="text-field__input" type="text" name="password" id="password" placeholder="Password" />
                </div>
            </div>
            <div className="button_field">
                <div className="login__button">
                    <button className="signup bf__bt">Зарегистрироваться</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegistrPage
