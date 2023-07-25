import './Auction.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

import bugatti from '../../Assets/Images/Bugatti-Divo-Customer-Configurations3.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Auction = () => {

  useEffect(() => {
    Aos.init(
      {
        duration: 3000
      }
    )
  },[])
  
  return (
    <div className='auction section'>
      <div className='secContainer container'>
        <div className='secHeading flex'>
          <h3 data-aos='fade-right' className='setTitle'>
            Active Auction
          </h3>

          <div data-aos='fade-left' className='navBtns flex'>
             <BsArrowLeftShort className='icon leftIcon'/>
             <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        <div className='carContainer grid'>
          {/* Single Car Div */}
          <div className='singleCar grid' data-aos='fade-up'>
            <div className='imgDiv'>
              <img src={bugatti} alt='Car Image'/>
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

            <div className='priceBuyBtn flex'>
              <span className='price'>
                $41.200
              </span>
              <span className='buyBtn'>
                Buy Now
              </span>
            </div>
          </div>
          
          <div className='singleCar grid' data-aos='fade-up'>
            <div className='imgDiv'>
              <img src={bugatti} alt='Car Image'/>
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

            <div className='priceBuyBtn flex'>
              <span className='price'>
                $41.200
              </span>
              <span className='buyBtn'>
                Buy Now
              </span>
            </div>
          </div>

          <div className='singleCar grid' data-aos='fade-up'>
            <div className='imgDiv'>
              <img src={bugatti} alt='Car Image'/>
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

            <div className='priceBuyBtn flex'>
              <span className='price'>
                $41.200
              </span>
              <span className='buyBtn'>
                Buy Now
              </span>
            </div>
          </div>

          <div className='singleCar grid' data-aos='fade-up'>
            <div className='imgDiv'>
              <img src={bugatti} alt='Car Image'/>
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

            <div className='priceBuyBtn flex'>
              <span className='price'>
                $41.200
              </span>
              <span className='buyBtn'>
                Buy Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auction
