import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className="CTA">
        <a href={CV} download className='btn'>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Hablemos</a>
    </div>
  )
}

export default CTA