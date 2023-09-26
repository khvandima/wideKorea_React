import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
        <div className="text-container">
            <p className="text-text">
                Duis deserunt irure ea enim adipisicing minim velit irure. Enim laborum dolor duis adipisicing irure dolore fugiat et. Culpa in officia tempor culpa tempor consequat et deserunt do cupidatat quis. Ipsum qui excepteur proident laborum. Officia cupidatat laboris enim exercitation pariatur ullamco qui sit esse esse. Deserunt commodo ut ad id et cillum proident. Exercitation aliquip veniam laborum pariatur proident consectetur consequat irure eu.
            </p>
        </div>
        <div className="login__form">
            <div className="fields">
                <div className="login__field field">
                    <label className="text-field__label" for="login">Логин</label>
                    <input className="text-field__input" type="text" name="login" id="login" placeholder="Login" />
                </div>
                <div className="password__field field">
                    <label className="text-field__label" for="passworf">Пароль</label>
                    <input className="text-field__input" type="password" name="password" id="login" placeholder="Password" />
                </div>
            </div>
            <div className="button_field">
                <div className="login__button">
                    <button className="login bf__bt">
                        Войти
                    </button>
                    <Link to="/reg">
                        <button className="signup bf__bt">
                        Регистрация
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LoginPage
