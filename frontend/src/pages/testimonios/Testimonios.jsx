import './testimoniosStyle.css'
import imagen1 from '../../assets/testimonios/logros-pescar.png'
import imagen2 from '../../assets/testimonios/testimonio-mentor.png'
import imagen3 from '../../assets/testimonios/testimonio-saleforce.png'
import imagen4 from '../../assets/testimonios/testimonio-saleforce2.png'
import { Swiper } from 'swiper/react';


const Testimonios = () => {


  return (

    <div>
      <Swiper>

        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <section className="container-tadeo">
                <div className="testimonial">
                  <div className="details">
                    <h1 className="testimonio">Testimonios</h1>
                  </div>
                  <div className="testi-content">
                    <div className="slide">
                      <img src={imagen3} alt="" className="image" />
                      <p>Estoy súper contento y súper feliz por toda la experiencia que me dio Pescar, que me enorgullece y tambien enorgullece a toda mi familia.</p>
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
                      <p>Le quiero dar las gracias a Salesforce y a Pescar por haberme dado esta maravillosa oportunidad, me ayudó a poder definir mi futuro.</p>
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
                      <p>La llegada de los chicos la verdad que revolucionó la empresa. Es un programa donde realmente implica que hayan muchas personas y una gran responsabilidad detrás de ello.</p>
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
      </Swiper>
    </div>
  )
}

export default Testimonios