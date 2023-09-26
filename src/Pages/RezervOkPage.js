import React from 'react'
import { Link } from 'react-router-dom'

const RezervOkPage = () => {
  return (
    <div>
        <div className="title-container">
          <h1 className="h1-title">
            Всем спасибо! Кина не будет!!!
          </h1>
        </div>
        <div className="text-container">
          <p className="text-text">
            Et amet ullamco incididunt dolor veniam pariatur officia commodo pariatur laborum reprehenderit officia. Officia laborum id duis consectetur fugiat dolor. Tempor sunt culpa laborum minim pariatur sunt labore aliquip nostrud aute sit ut ullamco occaecat. Elit voluptate elit qui aliqua veniam anim veniam id officia deserunt laborum ad. Ipsum id irure occaecat duis. Et consequat incididunt occaecat incididunt laborum elit anim. Sit occaecat labore excepteur ipsum occaecat.
          </p>
        </div>
        <div className="back_to_home">
            <Link to="/" className='back-btn'>На главную</Link>
        </div>
    </div>
  )
}

export default RezervOkPage
