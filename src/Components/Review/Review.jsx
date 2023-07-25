import React from 'react'
import './Review.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import bugattiReview from '../../Assets/Images/bugattiReview.jpg'
import reviewer from '../../Assets/Images/reviewer.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Review = () => {

  useEffect(() => {
    Aos.init(
      {
        duration: 3000
      }
    )
  },[])

  return (
    <div className='review section'>
      <div className='secContainer container'>
        <div className='secHeading flex'>
          <h3 data-aos='fade-right' className='secTitle'>
            Recent Reviews
          </h3>

          <div data-aos='fade-left' className='navBtns flex'>
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        {/* Review Container */}
        <div className='reviewContainer grid' >
          {/* Single Review */}
          <div className='singleReview grid' data-aos='fade-up'>
            <div className='imgDiv'>
              <img src={bugattiReview} alt='Car Image'/>              
            </div>

            <h5 className='reviewTitle'>
              2023 Cadiallac
            </h5>

            <span className='desc'>
              Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
            </span>

            <div className='reviewerDiv flex'>
              <div className='leftDiv flex'>
                <div className='reviewImage'>
                  <img src={reviewer} alt='Review Image'/>
                </div>
                <div className='aboutReviewer'>
                  <span className='name'>
                    Jakline Nelson
                  </span>
                  <p>Chief Editor</p>
                </div>
              </div>

              <div className='rightDiv flex'>
                <AiFillStar className='icon'/>
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>

          {/* Single Review */}
          <div className='singleReview grid' data-aos='fade-up'>
            <div className='imgDiv'>
              <img src={bugattiReview} alt='Car Image'/>              
            </div>

            <h5 className='reviewTitle'>
              2023 Cadiallac
            </h5>

            <span className='desc'>
              Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
            </span>

            <div className='reviewerDiv flex'>
              <div className='leftDiv flex'>
                <div className='reviewImage'>
                  <img src={reviewer} alt='Review Image'/>
                </div>
                <div className='aboutReviewer'>
                  <span className='name'>
                    Jakline Nelson
                  </span>
                  <p>Chief Editor</p>
                </div>
              </div>

              <div className='rightDiv flex'>
                <AiFillStar className='icon'/>
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>

          {/* Single Review */}
          <div className='singleReview grid' data-aos='fade-up'>
            <div className='imgDiv'>
              <img src={bugattiReview} alt='Car Image'/>              
            </div>

            <h5 className='reviewTitle'>
              2023 Cadiallac
            </h5>

            <span className='desc'>
              Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
            </span>

            <div className='reviewerDiv flex'>
              <div className='leftDiv flex'>
                <div className='reviewImage'>
                  <img src={reviewer} alt='Review Image'/>
                </div>
                <div className='aboutReviewer'>
                  <span className='name'>
                    Jakline Nelson
                  </span>
                  <p>Chief Editor</p>
                </div>
              </div>

              <div className='rightDiv flex'>
                <AiFillStar className='icon'/>
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Review
