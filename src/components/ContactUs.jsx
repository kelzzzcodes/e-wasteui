import React from 'react'

const ContactUs = () => {
  return (
    <section className='flex justify-center items-center' name='ContactUs'>

      <div  className='flex justify-center items-center p-5'>
        <div className='flex flex-col space-y-4 text-white text-xl p-5 bg-gray-700 bg-opacity-0.5 w-[40%]'>
            
            <div>
              <h2 className='text-3xl text-green-600'>Contact Us</h2>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. accusantium consequuntur suscipit distinctio dolor error?</p>
            </div>
              <form>
                  <div className='flex-col space-y-2 '>
                      
                      <input type='text' id='firstName' placeholder='First Name' className='w-full max-w-l' />
                      <input type='text' id='firstName' placeholder='Last Name' className='w-full max-w-l'/>
                      <input type='email' id='email' placeholder='Email address' className='w-full max-w-l'/>
                      <input type='tel' id='tel' placeholder='Phone number' className='w-full max-w-l'/>
                      <input type='text' id='issue' placeholder='What  kind of issue are you having ?' className='w-full max-w-l'/>
                      <textarea
      class="
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Your message"
    ></textarea>
                  </div>

              </form>

            </div>


      </div>
      

    
            
        {/* <div className="flex flex-col">
         <div className="flex flex-col justify-center align-center space-y-8">
         <h2 className="text-sm font-extrabold md:text-3xl">
           Have any question ? <span className='text-green-700'>Reach Out today</span>
          </h2>
          <p>
            Let's know any concern you might have and we will get back to you in gthe next 24 hours
          </p>
         </div>
        </div> */}

      




    </section>
  )
}

export default ContactUs