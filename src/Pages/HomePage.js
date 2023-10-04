import React from 'react'

import Button from '../Components/Button/Button'

const HomePage = () => {
  return (
    <div>
        <div className="title-container">
          <h1 className="h1-title">
            Occaecat mollit velit aliqua excepteur aliqua ut mollit
          </h1>
        </div>
        <div className="text-container">
          <p className="text-text">
            Et amet ullamco incididunt dolor veniam pariatur officia commodo pariatur laborum reprehenderit officia. Officia laborum id duis consectetur fugiat dolor. Tempor sunt culpa laborum minim pariatur sunt labore aliquip nostrud aute sit ut ullamco occaecat. Elit voluptate elit qui aliqua veniam anim veniam id officia deserunt laborum ad. Ipsum id irure occaecat duis. Et consequat incididunt occaecat incididunt laborum elit anim. Sit occaecat labore excepteur ipsum occaecat.
          </p>
        </div>
        <Button img1="../../image/reserv.png" img2="../../image/docs.png" title1="Забронировать" title2="Документы" path1="/rez_type" path2="/docs_type_page" />
    </div>
  )
}

export default HomePage
