
import Bg from '../images/Herobackground.jpg'

const Hero = () => {
  return (
    <div className="flex min-h-screen justify-center items-center p-5  " style={{backgroundImage:`url(${Bg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'center'}}>
      
        <div className=" flex flex-col space-y-4 text-white p-5 bg-black bg-opacity-50 w-[600px] ">
         <div className='flex justify-center align-center'>
           <h1 className='text-l text-green-600 md:text-green-600 text-3xl font-extrabold' >Waste in your area</h1>
           </div>
         <div>
           <p className=' text-l sm:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus a
            autem cupiditate nemo animi consequuntur, molestiae repudiandae ut
            eveniet, provident, minima labore ad rerum quaerat ex laborum. Iste,
            itaque magnam?
          </p></div>
          <div className='flex justify-center align-center'>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="flex flex-end align-center px-6 py-2.5 bg-white border-1 border-green-600 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
          >
            Join Us Today
          </button>
          </div>
        
        
      </div>
    </div>
  )
}

export default Hero
