import React from 'react'
import brand from '../images/brand.PNG'
const AboutUs = () => {
  return (
   <section  name='AboutUs'>

<div className="p-5 mt-10 ">
      <div className="flex flex-col">
        <div className="flex justify-center align-center">
          <h2 className="text-sm font-extrabold md:text-3xl">
            We aim to serve the community and contribute to global waste
            management
          </h2>
        </div>
        <div className="flex flex-col justify-center align-center mt-8 space-x-8  p-2 md:flex-row ">
        <div className='flex space-x-8 '>
        <div>
            <figure className="flex justify-center align-center text-xl text-green-700 ">
              10<span>+</span>
            </figure>
            <p>Areas Serviced</p>
          </div>
          <div>
            <figure className="flex justify-center align-center text-xl text-green-700">
              50<span>+</span>
            </figure>
            <p>Professional Workers</p>
          </div>
        </div>
          <div className='flex space-x-8  '>

          <div>
            <figure className="flex justify-center align-center text-xl text-green-700">
              300<span>+</span>
            </figure>
            <p>Collectors</p>
          </div>
          <div>
            <figure className="flex justify-center align-center text-xl text-green-700">
              1000<span>+</span>
            </figure>
            <p>Killograms of Waste</p>
          </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-5 mt-20">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h2 className="text-sm font-extrabold md:text-l">
              Satisfaction is <span className="text-green-700">key</span> to
              progress
            </h2>
          </div>
          <div className="mt-5">
            <p className="lg:w-[600px] md:w-[400] sm:w-[300] ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
              necessitatibus eius quod dignissimos at sit delectus consequuntur
              harum temporibus eligendi.
            </p>
          </div>
        </div>

      
      </div>


        <div className='flex flex-col max-md:space-y-4 justify-around mt-20 md:flex-row'>

        <div class="flex justify-center">
          <div class="block p-6 rounded-lg shadow-lg bg-white-700 max-w-sm border-2 border-green-200 ">
          <img src={brand} className='w-20 top-[-70px] left-[-50px] relative' />
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Card title
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          
          </div>
        </div>

        <div class="flex justify-center">
          <div class="block p-6 rounded-lg shadow-lg bg-white-700 max-w-sm border-2 border-green-200 ">
          <img src={brand} className='w-20 top-[-70px] left-[-50px] relative' />
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Card title
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
           
          </div>
        </div>

        <div class="flex justify-center">
          <div class="block p-6 rounded-lg shadow-lg bg-white-700 max-w-sm border-2 border-green-200 ">
          <img src={brand} className='w-20 top-[-70px] left-[-50px] relative' />
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Card title
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          
          </div>
        </div>









        </div>

    </div>
   </section>
  )
}

export default AboutUs
