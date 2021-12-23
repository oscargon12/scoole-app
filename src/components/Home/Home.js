import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const Home = () => {
    return (
        <div>
          <Carousel>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/clase-firebase-1d1eb.appspot.com/o/home_1.jpg?alt=media&token=806d7b5a-2892-4498-a050-4e1358daac2f"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Longboards electricas</h3>
                <p>Nuevas opciones</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/clase-firebase-1d1eb.appspot.com/o/home_2.jpg?alt=media&token=9aeefcc4-8532-40c4-8e82-502247b34ee3"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Bicicletas</h3>
                <p>Quema grasa, no combustible</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/clase-firebase-1d1eb.appspot.com/o/home_3.jpg?alt=media&token=dd7e705b-7952-4fb8-b5c6-8383f3483f2a"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Scooters</h3>
                <p>Escapa del tráfico</p>
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


        </div>
    )
}
