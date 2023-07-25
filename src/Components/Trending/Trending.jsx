import React from 'react'
import './Trending.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

import car1 from '../../Assets/Images/LamborghiniHuracanEvoFluoCapsule.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Trending = () => {


  useEffect(() => {
    Aos.init(
      {
        duration: 3000
      }
    )
  },[])


  return (
    <div className='trending section'>
      <div className='secContainer container'>
        <div className='secHeading flex'>
          <h3 data-aos='fade-right' className='setTitle'>
            Trending Near You
          </h3>

          <div className='navBtns flex' data-aos='fade-left'>
             <BsArrowLeftShort className='icon leftIcon'/>
             <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        <div className='carContainer grid'>
          {/* Single Car Div */}
          <div data-aos='fade-up' className='singleCar grid'>
            <div className='imgDiv'>
              <img src={car1} alt='Car Image'/>
            </div>
            <h5 className='carTitle'>
              Used 2019 Audi s4 Premium Plus
            </h5>
            <span className='miles'>
              11457 Miles
            </span>
            <span className='AWD'>
              AWD 4-Cylinder Turbo
            </span>

            <div className='priceSeller flex'>
              <span className='price'>
                $41.200
              </span>
              <span className='seller'>
                Best Seller
              </span>
            </div>
          </div>
           {/* Single Car Div */}
          <div data-aos='fade-up' className='singleCar grid'>
            <div className='imgDiv'>
              <img src={car1} alt='Car Image'/>
            </div>
            <h5 className='carTitle'>
              Used 2019 Audi s4 Premium Plus
            </h5>
            <span className='miles'>
              11457 Miles
            </span>
            <span className='AWD'>
              AWD 4-Cylinder Turbo
            </span>

            <div className='priceSeller flex'>
              <span className='price'>
                $41.200
              </span>
              <span className='seller'>
                Best Seller
              </span>
            </div>
          </div>

           {/* Single Car Div */}
          <div data-aos='fade-up' className='singleCar grid'>
            <div className='imgDiv'>
              <img src={car1} alt='Car Image'/>
            </div>
            <h5 className='carTitle'>
              Used 2019 Audi s4 Premium Plus
            </h5>
            <span className='miles'>
              11457 Miles
            </span>
            <span className='AWD'>
              AWD 4-Cylinder Turbo
            </span>

            <div className='priceSeller flex'>
              <span className='price'>
                $41.200
              </span>
              <span className='seller'>
                Best Seller
              </span>
            </div>
          </div>

           {/* Single Car Div */}
          <div data-aos='fade-up' className='singleCar grid'>
            <div className='imgDiv'>
              <img src={car1} alt='Car Image'/>
            </div>
            <h5 className='carTitle'>
              Used 2019 Audi s4 Premium Plus
            </h5>
            <span className='miles'>
              11457 Miles
            </span>
            <span className='AWD'>
              AWD 4-Cylinder Turbo
            </span>

            <div className='priceSeller flex'>
              <span className='price'>
                $41.200
              </span>
              <span className='seller'>
                Best Seller
              </span>
            </div>
          </div>

           {/* Single Car Div */}
          <div data-aos='fade-up' className='singleCar grid'>
            <div className='imgDiv'>
              <img src={car1} alt='Car Image'/>
            </div>
            <h5 className='carTitle'>
              Used 2019 Audi s4 Premium Plus
            </h5>
            <span className='miles'>
              11457 Miles
            </span>
            <span className='AWD'>
              AWD 4-Cylinder Turbo
            </span>

            <div className='priceSeller flex'>
              <span className='price'>
                $41.200
              </span>
              <span className='seller'>
                Best Seller
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
