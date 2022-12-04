import BULB from '../images/bulb.png'

const Services = () => {
  return (
    <section  name='Services'>
         <div className="flex flex-col justify-center items-center mt-8">
          <div className="flex justify-center items-center">
            <h2 className="text-sm font-extrabold md:text-3xl">
              What services do we offer?
            </h2>
          </div>
          <div className="flex justify-center items-center mt-5 p-6">
            <p>
              We offer a range of state of the art waste disposal service
            </p>
          </div>
        </div>

        <div className="grid p-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col text-center space-y-4">
                <div className="flex flex-col space-y-2">
                <div className='flex justify-center items-center'>
                <img src={BULB} className='w-[60px]'></img>
                </div>
                <h3 className="text-green-700">Eco-waste Management</h3>
                </div>
               <div>
               <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
               </div>
            </div>
            <div className="flex flex-col text-center space-y-4">
                <div className="flex flex-col space-y-2">
                <div className='flex justify-center items-center'>
                <img src={BULB} className='w-[60px]'></img>
                </div>
                <h3 className="text-green-700">Biomedical Disposal</h3>
                </div>
                <div>
               <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
               </div>
              </div>

            <div className="flex flex-col text-center space-y-4">
                <div className="flex flex-col space-y-2">
                <div className='flex justify-center items-center'>
                <img src={BULB} className='w-[60px]'></img>
                </div>
                <h3 className="text-green-700">Plastic waste Management</h3>
                </div>
                <div>
               <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
               </div>
            </div>
            <div className="flex flex-col text-center space-y-4">
                <div className="flex flex-col space-y-2">
                <div className='flex justify-center items-center'>
                <img src={BULB} className='w-[60px]'></img>
                </div>
                <h3 className="text-green-700">Pollution Device Services</h3>
                </div>
                <div>
               <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
               </div>
            </div>

           

        </div>

        <div className="flex justify-center items-center p-8">
            <button
             type="button" className="flex flex-end align-center text-center px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white hover:text-black hover:border-2 border-green-200 border-y-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
              BOOK A SERVICE TODAY
              </button>
          
            </div>
      
    </section>
  )
}

export default Services