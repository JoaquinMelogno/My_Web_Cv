import React from 'react'
import './portfolio.css'
import trading from '../../assets/trading.jpg'





const Portfolio = () => {
  const data=[
    {
      id:1,
      image:trading,
      title:"titulo del proyecto",
      github:'https://github.com',
      demo:'https://github.com'
    },
    {
      id:2,
      image:trading,
      title:"titulo del proyecto",
      github:'https://github.com',
      demo:'https://github.com'
    },
    {
      id:3,
      image:trading,
      title:"titulo del proyecto",
      github:'https://github.com',
      demo:'https://github.com'
    },
    {
      id:4,
      image:trading,
      title:"titulo del proyecto",
      github:'https://github.com',
      demo:'https://github.com'
    },
    {
      id:5,
      image:trading,
      title:"titulo del proyecto",
      github:'https://github.com',
      demo:'https://github.com'
    },
    {
      id:1,
      image:trading,
      title:"titulo del proyecto",
      github:'https://github.com',
      demo:'https://github.com'
    },
  ]
  return (
    <section id='portfolio'>
      
        <h1>Projectos</h1>
      <div className="container portfolio__container">
      {
        data.map(({id,image,github,demo,title})=>{
          return(
            <article key={id} className='portfolio__items'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github}className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Github</a>
                
              </div>
  
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio