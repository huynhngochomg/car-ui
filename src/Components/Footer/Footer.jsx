import React from 'react'
import './Footer.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Footer = () => {

  useEffect(() => {
    Aos.init(
      {
        duration: 3000
      }
    )
  },[])

  return (
    <div className='footer'>
      <div className='footerContainer container'>
        <div className='footerMenuDiv grid'>
          <div data-aos='fade-up' className='singleGrid'>
            <span className='footerTitle'>
              About
            </span>
            <ul className='footerUl grid'>
              <li className='footerLi'>
                How it works
              </li>
              <li className='footerLi'>
                Careers
              </li>
              <li className='footerLi'>
                Affiliates
              </li>
              <li className='footerLi'>
                Media
              </li>
              
            </ul>
          </div>

          <div className='singleGrid' data-aos='fade-up'>
            <span className='footerTitle'>
              Become Seller
            </span>
            <ul className='footerUl grid'>
              <li className='footerLi'>
                Add Vehicles
              </li>
              <li className='footerLi'>
                Resource center
              </li>
              <li className='footerLi'>
                Bonds
              </li>
              <li className='footerLi'>
                Release Dates
              </li>
              
            </ul>
          </div>

          <div className='singleGrid' data-aos='fade-up'>
            <span className='footerTitle'>
              Community
            </span>
            <ul className='footerUl grid'>
              <li className='footerLi'>
                Recommendations
              </li>
              <li className='footerLi'>
                Gift Cards
              </li>
              <li className='footerLi'>
                Top Ups
              </li>
              <li className='footerLi'>
                Selling
              </li>
              
            </ul>
          </div>

          <div className='singleGrid' data-aos='fade-up'>
            <span className='footerTitle'>
              Booking Support
            </span>
            <ul className='footerUl grid'>
              <li className='footerLi'>
                Update for Covid-19
              </li>
              <li className='footerLi'>
                Help center
              </li>
              <li className='footerLi'>
                Garages
              </li>
              <li className='footerLi'>
                Trust and Safety
              </li>
              
            </ul>
          </div>
        </div>

        {/* Footer lower section */}
        <div className='lowerSection grid' >
          <p> 2023 All right reserved</p>
          <blockquote> Huynh Hong Project</blockquote>
        </div>
      </div>
    </div>
  )
}

export default Footer
