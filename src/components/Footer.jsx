import React from 'react'

const Footer = () => {
  return (

<div class="text-center p-4 border-2 border-t-black">
  <div class="px-6 pt-6">
    <form action="">
      <div class="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
        <div class="md:ml-auto md:mb-6">
          <p class="text-gray-800">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>

        <div class="md:mb-6">
          <input
            type="text"
            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              
            "
            id="exampleFormControlInput1"
            placeholder="Email address one"/>
        </div>

        <div class="md:mr-auto mb-6">
        <button
             type="button" className="flex flex-end align-center text-center px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white hover:text-black hover:border-2 border-green-200 border-y-green-500 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
              Subscribe
              </button>
        </div>
      </div>
    </form>
  </div>

  <div class="text-center text-gray-700 p-4">
    © 2022 Copyright
    <a class="text-gray-800" href="https://tailwind-elements.com/">KELzzzCodes</a>
  </div>
</div>

  
  )
}

export default Footer