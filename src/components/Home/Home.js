import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { ItemListContainer } from '../ListContainer/ItemListContainer'
import { FiChevronRight } from 'react-icons/fi'

export const Home = () => {
    return (
        <div>
          <Carousel className='carousel-height'>
            <Carousel.Item className='carousel-height'>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/clase-firebase-1d1eb.appspot.com/o/home_1.jpg?alt=media&token=21ed50f9-4ac0-407f-b0c1-a9e52e2077f1"
                alt="First slide"
              />
              <Carousel.Caption>
                <h2 className='bas-font'>Longboards electricas</h2>
                <div className='carousel-label'>
                  <p>Nuevas opciones de transporte</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-height'>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/clase-firebase-1d1eb.appspot.com/o/home_2.jpg?alt=media&token=175a2a2d-8b94-447d-95b4-cb862a65b84f"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h2 className='bas-font'>Bicicletas</h2>
                <div className='carousel-label'>
                  <p>Quema grasa, no combustible</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-height'>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/clase-firebase-1d1eb.appspot.com/o/home_3.jpg?alt=media&token=dd7e705b-7952-4fb8-b5c6-8383f3483f2a"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h2 className='bas-font'>Scooters</h2>
                <div className='carousel-label'>
                  <p>Escapa del tráfico</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <Container className='mt-4'>
            <div className='row'>
              <div className='col-12 col-md-4 px-0 mb-2 cat-btn'>
                <Link className='nav-link py-0' to="productos/bike">
                  <img
                    className='w-100'
                    src="https://firebasestorage.googleapis.com/v0/b/clase-firebase-1d1eb.appspot.com/o/bicis.png?alt=media&token=2c92d8ca-edb1-48ca-adb9-7f415d39be23"
                    alt="bikes button"
                  />
                </Link>
              </div>
              <div className='col-12 col-md-4 px-0 mb-2 cat-btn'>
                <Link className='nav-link py-0' to="productos/scooter">
                  <img
                    className='w-100'
                    src="https://firebasestorage.googleapis.com/v0/b/clase-firebase-1d1eb.appspot.com/o/scooter.png?alt=media&token=989ba08a-e71f-4ee3-af7c-0a61de66a003"
                    alt="Scooter button"
                  />
                </Link>
              </div>
              <div className='col-12 col-md-4 px-0 mb-2 cat-btn'>
                <Link className='nav-link py-0' to="productos/longboard">
                  <img
                    className='w-100'
                    src="https://firebasestorage.googleapis.com/v0/b/clase-firebase-1d1eb.appspot.com/o/longboard.png?alt=media&token=36486a33-5206-4adf-a284-82f3e0c5d4f2"
                    alt="longboard button"
                  />
                </Link>
              </div>

            </div>
          </Container>

          <ItemListContainer/>

          <section className='container-fluid bg-light mt-5'>
            <div className="row featurette">
              <div className="col-md-7 order-md-2 my-auto ps-5">
                <h2 className="featurette-heading bas-font">Que no se te haga <span className="text-muted">tarde!</span></h2>
                <p className="lead fs-6">Aprovecha nuestras promociones navideñas</p>
                <Link to={`/productos`} className="btn btn-danger bas-font pt-1 pb-0 ps-3"> Ver productos <FiChevronRight/> </Link>

              </div>
              <div className="col-md-5 order-md-1 px-0">
              <img
                    className='w-100'
                    src="https://images.unsplash.com/photo-1579017919837-61418cbef18e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGJpY3ljbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="longboard button"
                  />

              </div>
            </div>
          </section>

          <Footer/>
        </div>
    )
}
