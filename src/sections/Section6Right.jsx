import React from 'react'

const Section6Right = () => {
  return (
    <div className='font-body' >
        <div className='relative'>
            <div className='h-16 w-2 bg-varal-blue absolute ' ></div>
            <h1 className='text-2xl ml-10 font-bold '>Get to know the whole us and <br /> more of our services</h1>
        </div>

        <div className='mt-10 text-xl font-medium ml-6' >
            <h2 className='text-2xl font-semibold' >Services</h2>
            <p className='text-gray-400 mt-1'>Products</p>
            <p className='text-gray-400 mt-1'>Solutions</p>
            <p className='text-gray-400 mt-1'>Assurance</p>
            <p className='text-gray-400 mt-1'>FAQ</p>
            <p className='text-gray-400 mt-1'>Working at Varal-Singhania</p>
        </div>
        <div className='mt-10 text-xl font-medium ml-6' >
            <h2 className='text-2xl font-semibold' >Policies</h2>
            <p className='text-gray-400 mt-1'>Privicy Policy</p>
            <p className='text-gray-400 mt-1'>Terms & Conditions</p>
        </div>
        <div className='mt-10 text-xl font-medium ml-6' >
            <h2 className='text-2xl font-semibold' >About</h2>
            <p className='text-gray-400 mt-1'>About Us</p>
            <p className='text-gray-400 mt-1'>Contact Us</p>
        </div>
        <div className='mt-10 text-xl font-medium ml-6' >
            <h2 className='text-2xl font-semibold' >Address</h2>
            <p className='text-gray-400 mt-1'>608 One Lake Plaza, Cluster T,</p>
            <p className='text-gray-400 mt-1'>Al Sarayat Street, Jumeirah</p>
            <p className='text-gray-400 mt-1'>Lake Towers</p>
            <p className='text-gray-400 mt-1'>Dubai</p>
            <p className='text-gray-400 mt-1'>United Arab Emirates</p>
            <p className='text-gray-400 mt-6'>M: +971 55 794 2016</p>
            <p className='text-gray-400 mt-1'>O: +971 4 447 2061</p>
        </div>

        <div className='mt-10 text-xl font-medium ml-6' >
            <h2 className='text-2xl font-semibold' >Subscribe Now</h2>
            <p className='text-gray-400 mt-1'>For Amazing Opportunities in <br /> Dubai</p>
        </div>
        <div className='flex items-center mt-10 '>
            <input className=' p-5 bg-gray-200' type="text" placeholder='Enter email address' />
            <img src={require('../Assets/Group 34.png')} alt="img" />
        </div>

        <div className='flex gap-10 mt-12 items-center'>
            <img src={require('../Assets/Vector-5.png')} alt="img" />
            <img src={require('../Assets/Vector-6.png')} alt="img" />
            <img src={require('../Assets/Vector-8.png')} alt="img" />
            <img src={require('../Assets/Vector-7.png')} alt="img" />
        </div>
    </div>
  )
}

export default Section6Right