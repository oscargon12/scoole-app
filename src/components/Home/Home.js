import React from 'react'
import { Carousel } from 'react-bootstrap'


export const Home = () => {
    return (
        <div>
          <Carousel>
            <Carousel.Item className='carousel-img'>
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
            <Carousel.Item className='carousel-img'>
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
            <Carousel.Item className='carousel-img'>
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


        </div>
    )
}
