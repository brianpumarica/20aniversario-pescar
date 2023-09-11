// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import './testimoniosStyle.css'
import imagen1 from '../../assets/testimonios/logros-pescar.png'
import imagen2 from '../../assets/testimonios/testimonio-mentor.png'
import imagen3 from '../../assets/testimonios/testimonio-saleforce.png'
import imagen4 from '../../assets/testimonios/testimonio-saleforce2.png'
import empleo1 from '../../assets/testimonios/primer-empleo-puente.png'
import empleo2 from '../../assets/testimonios/primer-empleo-puente2.png'
import empleo3 from '../../assets/testimonios/primer-empleo-puente3.png'
import empleo4 from '../../assets/testimonios/primer-empleo-puente4.png'
import empleo5 from '../../assets/testimonios/primer-empleo-puente5.png'
// import { Swiper } from 'swiper/react';
// import { Pagination } from 'swiper/modules';


const Testimonios = () => {


    return (

<div>
{/* <Swiper
>   */}
  
    <div className="swiper mySwiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <section className="container-tadeo">
            <div className="testimonial">
            <div className="details">
                <h1 className="testimonio">Testimonios: Egresados del Centro Pescar</h1>
            </div>
              <div className="testi-content">
                <div className="slide">
                  <img src={imagen3} alt="" className="image" />
                  <p className='text-white'>Estoy súper contento y súper feliz por toda la experiencia que me dio Pescar, que me enorgullece y tambien enorgullece a toda mi familia...</p>
                  <i className='bx bxs-quote-alt-left quote-icon'></i>
                  <div className="details">
                    <span className="name">Augusto Blanco</span>
                    <span className="job">Egresado Centro Pescar Saleforce</span>
                    <a href="https://www.youtube.com/watch?v=b3PskU2RC8E&ab_channel=FundacionPescar">Más Información</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="swiper-slide">
          <section className="container-tadeo">
            <div className="testimonial">
              <div className="testi-content">
                <div className="slide">
                  <img src={imagen4} alt="" className="image" />
                  <p>Le quiero dar las gracias a Salesforce y a Pescar por haberme dado esta maravillosa oportunidad, me ayudó a poder definir mi futuro...</p>
                  <i className='bx bxs-quote-alt-left quote-icon'></i>
                  <div className="details">
                    <span className="name">Francisco Encalada</span>
                    <span className="job">Egresado Centro Pescar Saleforce</span>
                    <a href="https://www.youtube.com/shorts/N9dSzETKxsA">Más Información</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="swiper-slide">
          <section className="container-tadeo">
            <div className="testimonial">
              <div className="testi-content">
                <div className="slide">
                  <img src={imagen2} alt="" className="image" />
                  <p>La llegada de los chicos la verdad que revolucionó la empresa. Es un programa donde realmente implica que hayan muchas personas y una gran responsabilidad detrás de ello...</p>
                  <i className='bx bxs-quote-alt-left quote-icon'></i>
                  <div className="details">
                    <span className="name">Patricio Castañero</span>
                    <span className="job">Senior Product Engineer (Mentor)</span>
                    <a href="https://www.youtube.com/watch?v=Q4Ye-lSKCLM&ab_channel=FundacionPescar">Más Información</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="swiper-slide">
          <section className="container-tadeo">
            <div className="testimonial">
              <div className="testi-content">
                <div className="slide">
                  <img src={imagen1} alt="" className="image" />
                  <p>Un pequeño recorrido de todos los logros que hemos adquirido este último año...</p>
                  <i className='bx bxs-quote-alt-left quote-icon'></i>
                  <div className="details">
                    <span className="name">Fundación Pescar</span>
                    <span className="job">Logros conseguidos en el año 2022</span>
                    <a href="https://www.youtube.com/watch?v=d7TTdi_i4Qo">Más Información</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
    {/* TESTIMONIO PUENTE: PRIMER EMPLEO */}

    <div className="swiper-slide">
          <section className="container-tadeo">
            <div className="testimonial">
            <div className="details">
                <h1 className="testimonio">Testimonios Puente: Mi primer empleo</h1>
            </div>
              <div className="testi-content">
                <div className="slide">
                  <img src={empleo1} alt="" className="image" />
                  <p>Me llamo la atención que era un programa para personas sin experiencia y aparte por los requerimientos del puesto, yo sentí que era compatible...</p>
                  <i className='bx bxs-quote-alt-left quote-icon'></i>
                  <div className="details">
                    <span className="name">Alan Barraza</span>
                    <span className="job">Pasante área de compliance</span>
                    <a href="https://www.youtube.com/watch?v=Is7wwTs5ZKA&t=14s&ab_channel=PuenteHnos">Más Información</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="swiper-slide">
          <section className="container-tadeo">
            <div className="testimonial">
              <div className="testi-content">
                <div className="slide">
                  <img src={empleo2} alt="" className="image" />
                  <p>Esta oportunidad de pasantía me pareció interesante por que es una gran propuesta darle a los chicos su primer experiencia laboral porque sabemos que el primer trabajo es el que mas cuesta...</p>
                  <i className='bx bxs-quote-alt-left quote-icon'></i>
                  <div className="details">
                    <span className="name">Nicolas Rios</span>
                    <span className="job">Gestión de Tecnología</span>
                    <a href="https://www.youtube.com/watch?v=P9dhyKiaIG4&ab_channel=PuenteHnos">Más Información</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="swiper-slide">
          <section className="container-tadeo">
            <div className="testimonial">
              <div className="testi-content">
                <div className="slide">
                  <img src={empleo3} alt="" className="image" />
                  <p>Lo que puedo destacar del puesto es la predisposición del trabajo, valoro mucho en el puesto en el que estoy...</p>
                  <i className='bx bxs-quote-alt-left quote-icon'></i>
                  <div className="details">
                    <span className="name">Oscar Quispe</span>
                    <span className="job">Derecho</span>
                    <a href="https://www.youtube.com/watch?v=UkKJPAQpxoU&ab_channel=PuenteHnos">Más Información</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="swiper-slide">
          <section className="container-tadeo">
            <div className="testimonial">
              <div className="testi-content">
                <div className="slide">
                  <img src={empleo4} alt="" className="image" />
                  <p>Esta primera experiencia se siente enriquecedora, a nivel personal, se complementa mucho con mi carrera. Te abre la puerta a profesionalizarte y poder crecer también en lo que uno hace...</p>
                  <i className='bx bxs-quote-alt-left quote-icon'></i>
                  <div className="details">
                    <span className="name">Magali Gamecho</span>
                    <span className="job">Pasante en AML digitalizando archivos</span>
                    <a href="https://www.youtube.com/watch?v=HO2M18OjzEQ&ab_channel=PuenteHnos">Más Información</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="swiper-slide">
          <section className="container-tadeo">
            <div className="testimonial">
              <div className="testi-content">
                <div className="slide">
                  <img src={empleo5} alt="" className="image" />
                  <p>Lo que mas me llevo de esta experiencia fue el poder conocer a la gente. Todos trabajan mucho en equipo y ayudan con el conocimiento, también aportan mucho para que uno pueda crecer...  </p>
                  <i className='bx bxs-quote-alt-left quote-icon'></i>
                  <div className="details">
                    <span className="name">Keila Rojas</span>
                    <span className="job">Administración de Empresas</span>
                    <a href="https://www.youtube.com/watch?v=RO1yHi869U8&ab_channel=PuenteHnos">Más Información</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>



        {/* </Swiper> */}
        </div>
    )
}

export default Testimonios