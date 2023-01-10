import React from 'react'

const Features = () => {
  return (
    <div className='mt-20 flex flex-col lg:flex-row items-center lg:mx-24 gap-14' >
        <div className='flex flex-col items-center text-center' >
            <img src={require('../Assets/dungeon.png')} />
            <h3 className='text-2xl font-body font-semibold my-3' >UAE Free Zone Company</h3>
            <p className='text-gray-500 text-xl w-[60%] lg:w-auto ' >Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE.</p>
            <p className='text-orange-400  text-xl mt-3 ' >Get Started</p>
        </div> 
        <div className='flex flex-col items-center text-center' >
            <img src={require('../Assets/Vector-2.png')} />
            <h3 className='text-2xl font-body font-semibold my-3' >Dubai Local Companies</h3>
            <p className='text-gray-500 text-xl w-[60%] lg:w-auto ' >The Dubai LLC formation documents are actually articles of organization or a certificate of organization. You can get yours today.</p>
            <p className='text-orange-400  text-xl mt-3 '>Get Started</p>
        </div>
        <div className='flex flex-col items-center text-center'>
          <img src={require('../Assets/Vector-1.png')} />
          <h3 className='text-2xl font-body font-semibold my-3'>Offshore Companies</h3>
          <p className='text-gray-500 lg:w-auto w-[60%] text-xl ' >You can register an offshore company and open its bank account in Dubai.Your agent will help you along all the process</p>
          <p className='text-orange-400  text-xl mt-3'>Get Started</p>
        </div>
    </div>
  )
}

export default Features