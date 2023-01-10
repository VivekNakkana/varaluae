import React from 'react'

const Hero = () => {
  return (
    <>
    {/* Search Bar */}
      <div className='lg:float-right flex justify-center ' >
        <input type='text' placeholder=' &#x1F50D;  Search a Term | Topic' className=' mt-16 mx-32 lg:mr-20 border-2 border-varal-blue rounded-md pr-24 px-3 py-3 text-xl w-screen lg:w-auto font-head font-medium placeholder-varal-blue'/>
      </div>


      {/* Introduction  */}

      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-center content-center mx-24 mt-20 lg:mt-36' >
        <div className='lg:w-[60rem] ' >
          <p className='text-varal-blue lg:text-2xl text-3xl font-semibold lg:font-medium font-body ' >Claim a Free Quote</p>

          <div className='relative mt-4 mb-6 ' >
            <div className='bg-orange-400 w-72 h-2 absolute top-14' ></div>
            <h2 className='text-5xl leading-tight text-black/80 font-[900] font-body' >Get started on fulfilling your Dubai or UAE dream.</h2>
            </div>

          <div className='lg:hidden block' >
            <img src={require('../Assets/ILLUSTRATION.png')} alt='illustration' />
          </div>  
          <p className='text-varal-blue text-2xl font-medium font-body'>UAE & Offshore Company</p>
          <p className='text-gray-400 my-4 font-semibold text-2xl ' >We provide you with information about UAE or Offshore Company Registration & help you setup your company with a bank account and visas.</p>
          
          <div className='flex justify-center' >
          <div className='flex' >
            <button className='bg-varal-blue px-6 py-4 text-xl text-white font-head rounded-l-sm ' >Start a Company</button>
            <button className=' border-[1px] border-varal-blue bg-white text-varal-blue text-xl px-6 py-[15px] font-head rounded-r-sm ' >Renew a Company</button>
          </div>
          </div>
        </div>
        <div className='hidden lg:block' >
          <img src={require('../Assets/ILLUSTRATION.png')} alt='illustration' />
        </div>
      </div>
    </>
    
  )
}
export default Hero