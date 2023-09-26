import React from 'react'
import { Link } from 'react-router-dom'

const RezervById = () => {
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
        <div class="img_container">
                <img src="../image/idCard_sample.png" alt="ID Card" class="idCard_img" />
        </div>

        <div class="login__form">
                <div class="fields">
                    <div class="login__field field">
                        <label class="text-field__label" for="name">Ф.И.О.</label>
                        <div class="field-position1">1</div>
                        <input class="text-field__input" type="text" name="name" id="name" placeholder="Как Вас зовут?" />
                    </div>
                    <div class="id-num__field field">
                        <label class="text-field__label" for="idNum">Номер ID карты</label>
                        <div class="field-position2">2</div>
                        <input class="text-field__input" type="text" name="idNum" id="idNum" placeholder="Номер ID карты" />
                    </div>
                    <div class="date__field field">
                        <label class="text-field__label" for="date">Дата получения</label>
                        <div class="field-position3">3</div>
                        <input class="text-field__input" type="text" name="date" id="date" placeholder="Дата получения" />
                    </div>
                    <div class="date__field field">
                        <label className="text-field__label" for="date_rez">Дата брони</label>
                        <div className="field-position__Q">?</div>
 
                        <div className=" date-input">
                            <input className='date-input_field' type="text" name="date_rez" placeholder='От' />
                            <span className='span'>~</span>
                            <input className='date-input_field' type="text" name="date_rez" placeholder='До' />
                            
                        </div>

                        {/* <input class="text-field__input" type="text" name="date_rez" id="date_rez" placeholder="Дата бронирования" /> */}
                    </div>


                </div>





                
                <div class="button_field">
                    <div class="login__button">
                        <Link to="/rez_ok_page">
                          <button class="signup bf__bt">Подать заявку</button>
                        </Link>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default RezervById
