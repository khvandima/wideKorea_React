import React from 'react'

const RegistrPage = () => {
  return (
    <div>
      <div class="text__container">
                <p class="text">
                    Lorem ipsum dolor sit amet consectetur. Sed pharetra velit molestie mauris ridiculus est aliquam commodo. Leo dictum eget mollis nunc sed mollis nec. Ut quam malesuada vel tristique. Lorem ipsum dolor sit amet consectetur. Sed pharetra velit molestie mauris ridiculus est aliquam commodo. Leo dictum eget mollis nunc sed mollis nec. Ut quam malesuada vel tristique.
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
