import React from 'react'

const Section3Right = () => {
  return (
    <div div className='flex gap-10 lg:gap-0 flex-col-reverse lg:flex-col items-center' >
        <div className='border-[1px] border-varal-blue/50 w-[25rem] rounded-xl p-10 mb-36 ' >
            <img src={require('../Assets/Group.png')} alt="img" />
            <h2  className='text-2xl font-semibold my-6 font-body '  >Advice & Guidance</h2>
            <p className='text-gray-400 mb-4 text-xl' >All activities in the UAE are licensed. Whether manufacturing, finance, trading, marketing, consultancy or restaurants. In some countries only manufacturing is licensed. In others there is a threshold below which business are encouraged. Get our insightfull guidance today.</p>
            <div   className='text-varal-blue text-xl gap-1 flex items-center font-body '>Learn more <img className='w-4' src={require('../Assets/Vector.png')} alt="img" /> </div>
        </div>
        <div className='border-[1px] border-varal-blue/50 w-[25rem] rounded-xl p-10'>
            <img src={require('../Assets/Group-1.png')} alt="img" />
            <h2  className='text-2xl font-semibold my-6 font-body '  >Registration Document Preparation</h2>
            <p className='text-gray-400 mb-4 text-xl'>Several documents must be prepared to start the process of registering a new company in the United Arab Emirates. Be it a Dubai local company, a free zone one or an offshore entity. Your registered agent is dedicated to get this done for you for a seamless process.</p>
            <div  className='text-varal-blue text-xl gap-1 flex items-center' >Learn more <img className='w-4 ' src={require('../Assets/Vector.png')} alt="img" /> </div>
        </div>
        <div className='font-body flex items-center lg:items-srart lg:text-start text-center flex-col '>
            <h2 className='text-2xl w-[60%] lg:w-auto font-medium mt-20 '  >We have gathered a team of professionals to craft adequate services you can rely on for a friction free setup in UAE</h2>
            <div  className='text-varal-blue text-xl gap-1 flex items-center mt-4 '>More about our services <img className='w-4' src={require('../Assets/Vector.png')} alt="img" /> </div>
        </div>
    </div>
  )
}

export default Section3Right