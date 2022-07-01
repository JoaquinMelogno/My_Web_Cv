import React from 'react'
import './about.css'
import aboutme from '../../assets/aboutme2.png'
import {TbAward} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>

      <h1>Empieza a Saber sobre mi</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutme} alt="" />
          </div>
        </div>

        <div className="about__me-content">
          <div className="aboutcards">
            <div className="aboutcard">
              <TbAward className='card_icon'/>
              <h2>Cursos Online</h2>
              <small>Udemy/youtube</small>
            </div>
            <div className="aboutcard">
              <TbAward className='card_icon'/>
              <h2>Desarrolladas habilidades blandas</h2>
            </div>
            <div className="aboutcard">
              <TbAward className='card_icon'/>
              <h2>Ingles Avanzado</h2>
                <small>First Michigan (ECCE)</small>

            </div>
          </div>
          <p className='presentacion'>
          Hola estimad@ mi nombre es joaquin soy estudiante de la carrera de ingenieria en sistemas en la Facultad de Ingenieria UDELAR.{<br/>}

          Comence a realizar cursos de desarrollo el primero fue con el lenaguaje PHP y luego me empece a desarrollar mas en el lenguaje Javascript con el cual ahora me siento muy comodo junto con react como  para comenzar a trabajar con el.{<br/>}
          Actualemente a la par de la facultad sigo realizando cursos/proyectos personales y aprendiendo diaramente habilidades nuevas, estoy muy motivado y con muchas ganas de comenzar mi carrera en el mundo de la programacion.{<br/>}
          desde ya muchas gracias por visitar mi pagina y espero sea de tu agrado.
          </p>
          
          <p className='saludo'>
          Saludos Atentamente Joaquin Melogno
          </p>
          
          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About