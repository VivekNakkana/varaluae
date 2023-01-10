import React from 'react'

const Section3Left = () => {
  return (
    <div className='flex flex-col items-center gap-10 lg:gap-0'>
    <div className='font-body flex items-center lg:items-start lg:text-start text-center flex-col'>
        <h2 className='lg:text-2xl text-xl   font-medium lg:mx-0 ' >Learn the ways in which you can benefit from a UAE/Offshore Company. Then get started on fulfilling your UAE dream.</h2>
        <p className='text-varal-blue text-2xl mt-4 mb-28 '>Claim a Free Quota</p>
    </div>
    <div className='border-[1px] border-varal-blue/50 w-[25rem] rounded-xl p-10 lg:mb-36 '>
        <img src={require('../Assets/ILLUSTRATION 03  1.png')} />
        <h2 className='text-2xl font-semibold my-6 font-body ' >Bank Account Setup</h2>
        <p className='text-gray-400 mb-4 text-xl' >There are many banks in the United Arab Emirates [UAE]. Both locally owned and branches of multinational ones. Foreign banks adjust according to their parent's strategies and have changed local requirements overnight in the past.But we are here to help you.</p>
        <div className='text-varal-blue text-xl gap-1 font-body flex items-center' > <p>Learn more</p> <img className='w-4 ' src={require('../Assets/Vector.png')} /> </div>
    </div>
    <div className='border-[1px] border-varal-blue/50 w-[25rem] rounded-xl p-10' >
        <img src={require('../Assets/Group-2.png')} />
        <h2 className='text-2xl font-semibold font-body my-6 ' >UAE Company Visas</h2>
        <p className='text-gray-400 mb-4 text-xl'>Your application for visas is critical especially if you intend to move to Dubai. This becomes even more urgent if your family will also move with you. All the paperwork is done on your behalf smoothly so that you may only focus on doing what matters most to you.</p>
        <div className='text-varal-blue text-xl gap-1 flex items-center font-body '  >Learn more <img className='w-4' src={require('../Assets/Vector.png')} /> </div>
    </div>
    </div>
  )
}

export default Section3Left