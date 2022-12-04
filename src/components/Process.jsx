import React from 'react'
import RECYCLEIMG from '../images/recycling.png'

const Process = () => {
  return (
    <section name='Process'>
         <div className="flex flex-col justify-center items-center mt-8">
          <div className="flex justify-center items-center">
            <h2 className="text-sm font-extrabold md:text-3xl">
             How do we manage the Waste ?
            </h2>
          </div>
          <div className="flex justify-center items-center align-center mt-5 p-4 w-full">
            <p className='flex items-center text-center w-[600px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iusto minus non earum facere incidunt. Aspernatur debitis eius numquam pariatur tempore? Eius consectetur tenetur facere suscipit praesentium aut neque quos.
            </p>
          </div>
          <div>
            <img src={RECYCLEIMG}></img>
          </div>
        </div>
    </section>
  )
}

export default Process