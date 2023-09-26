import React from 'react'
import { Link } from 'react-router-dom'

const RezervByPassport = () => {
  return (
    <div>
        <div className="title-container">
          <h1 className="h1-title">
            Бронирование по ID карте
          </h1>
        </div>
        <div className="text-container">
          <p className="text-text">
            Заполните ниже следующие поля как в ID карте
          </p>
        </div>
        <div className="login__form">
                <div className="fields">
                    <div class="name__field field">
                        <label className="text-field__label" for="name">Ф.И.О.</label>
                        <input className="text-field__input" type="text" name="name" id="name" placeholder="Как Вас зовут?" />
                    </div>
                    <div class="passport-num__field field">
                        <label className="text-field__label" for="passportNum">Номер Паспорта</label>
                        <input className="text-field__input" type="text" name="passportNum" id="passportNum" placeholder="Номер Паспорта" />
                    </div>
                    <div class="nation__field field">
                        <label className="text-field__label" for="nation">Гражданство</label>
                        <input className="text-field__input" type="text" name="nation" id="nation" placeholder="Гражданство" />
                    </div>
                    <div className="date__field field">
                        <label className="text-field__label" for="date">Дата рождения</label>
                        <input className="text-field__input" type="text" name="date" id="date" placeholder="Дата рождения" />
                    </div>
                    <div className="inKorea__field field">
                        <label className="text-field__label" for="inKorea">Город в Корее</label>
                        <input className="text-field__input" type="text" name="inKorea" id="inKorea" placeholder="Город в Корее" />
                    </div>


                </div>

                <div className="button_field">
                    <div className="login__button">
                        <Link to="/rez_ok_page">
                          <button class="signup bf__bt">Подать заявку</button>
                        </Link>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default RezervByPassport
