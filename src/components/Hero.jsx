import React from 'react'
import Hero_device from '../images/hero-devices.svg'


const Hero = () => {
  return (
    < div className='flex min-h-screen justify-center items-center p-10'>

       <div className='flex flex-col md:flex-row'>
       <div>
            <h1>Waste in your area</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus a autem cupiditate nemo animi consequuntur, molestiae repudiandae ut eveniet, provident, minima labore ad rerum quaerat ex laborum. Iste, itaque magnam?</p>
            <button type='button'>Join us</button>
        </div>
        <div>  
          <img src={Hero_device}  className=''/>
        </div>

       </div>
    </div>
  )
}

export default Hero