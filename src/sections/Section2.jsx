import React from 'react'
import Features from '../components/Features'

const Section2 = () => {
  return (
    <>
    <div className='flex items-center text-center mx-20 lg:flex-row flex-col lg:justify-center lg:items-center my-24 gap-2' >
        <p className='text-varal-blue text-xl font-semibold ' >Watch the video about UAE or Offshore Company Registration</p> 
        <img className='w-16 h-16 border-1 p-3 border-2 rounded-[50%] border-varal-blue ' src={require('../Assets/Group 117.png')} />
    </div>
    <div className='flex justify-center relative' >
        <div className='w-40 top-9 bg-orange-400 h-2 absolute ' ></div>
        <h3 className='text-center leading-tight font-semibold text-3xl font-body' >Dedicated <br/> to our mission we are </h3>
        
    </div>
    <div className=' flex justify-center mt-8 ' >
        <h3 className='text-center w-[45%] text-gray-400 font-medium text-2xl ' >Our services include Company Formation & Renewals, Trust & Fiduciary, Tax Residency Setup With Family Bank Accounts, Remote Management, Stock Trading Platforms, Ownership Solutions.</h3>
    </div>
    <Features/>

    </>
    
  )
}

export default Section2