import React from 'react'
import './Sellers.css'
import lamborghini from '../../Assets/Images/lamborghini.png'
import bugatti from '../../Assets/Images/bugatti.png'
import ferrari from '../../Assets/Images/ferrari.png'
import gtr from '../../Assets/Images/gtr.png'
const Sellers = () => {
  return (
    <div className='sellers section'>
      <div className='secContainer container'>
        <div className="secHeading grid">
          <h3 className='secTitle'>
            Explore top sellers in town
          </h3>
          <p>
            Joseph Samuel Girard holds the Guinness World Record for being the greatest salesman in the world.
          </p>
          <div className='sellersContainer'>
            {/* Single Seller */}
            <div className='singleSeller flex'>
              <div className='imgDiv flex'>
                <img src={bugatti} alt='lamborghini-image' className='img' />
              </div>
              <span className='info'>
                <h4 className='name'>Bugatti</h4>
                <p>From $120k</p>
              </span>
            </div>

            {/* Single Seller */}
            <div className='singleSeller flex'>
              <div className='imgDiv flex'>
                <img src={lamborghini} alt='lamborghini-image' className='img' />
              </div>
              <span className='info'>
                <h4 className='name'>Lamborghini</h4>
                <p>From $110k</p>
              </span>
            </div>

            {/* Single Seller */}
            <div className='singleSeller flex'>
              <div className='imgDiv flex'>
                <img src={ferrari} alt='lamborghini-image' className='img' />
              </div>
              <span className='info'>
                <h4 className='name'>Ferrari</h4>
                <p>From $100k</p>
              </span>
            </div>

            {/* Single Seller */}
            <div className='singleSeller flex'>
              <div className='imgDiv flex'>
                <img src={gtr} alt='lamborghini-image' className='img' />
              </div>
              <span className='info'>
                <h4 className='name'>GTR</h4>
                <p>From $90k</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sellers
