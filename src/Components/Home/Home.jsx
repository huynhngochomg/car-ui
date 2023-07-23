import React from 'react'
import './Home.css'
import image from '../../Assets/Images/LamborghiniHuracanEvoFluoCapsule.jpg'

const Home = () => {
  return (
    <div className='home'>
      <div className='secContainer'>
        <div className='homeText'>
          <span className='homeSpan'>
            Meet your new car
          </span>
          <h1 className='homeTitle'>
          Lamborghini Huracan Evo Fluo Capsule
          </h1>
          <div className='btns flex'>
            <button className='btn'>More Details</button>
            <button className='btn primaryBtn'>Test Drive</button>
          </div>
        </div>

        <div className='homeImage'>
          <img src={image} alt='Image home' />
        </div>
        
      </div>
    </div>
  )
}

export default Home
