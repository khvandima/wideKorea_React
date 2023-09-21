import React from 'react'

import Button from '../Components/Button/Button'

const HomePage = () => {
  return (
    <div className="container">
        <div className="text">
            <div className="text__title">
                <h1 className="text__title_item">Lorem ipsum dolor sit amet consectetur</h1>
            </div>
            <div className="text__text">
                <p className="text__text_item">Lorem ipsum dolor sit amet consectetur. Id tellus neque suspendisse in arcu duis ut nulla. Vel turpis faucibus tortor habitasse nulla eleifend ullamcorper nulla. Dui enim pellentesque ipsum a. Eros diam a ac sagittis turpis. Platea sit turpis morbi maecenas feugiat. Et nec venenatis commodo fermentum ullamcorper condimentum varius. Faucibus dictum porta tortor nulla. Integer et nunc urna egestas pellentesque i.</p>
            </div>
        </div>
        <Button img1="../../image/reserv.png" img2="../../image/docs.png" title1="Забронировать" title2="Документы" />
    </div>
  )
}

export default HomePage
