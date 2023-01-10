import React from 'react'

const Section6Left = () => {
  return (
    <div className='font-body' >
        <div className='relative'>
            <div className='h-16 w-2 bg-varal-blue absolute ' ></div>
            <h1 className='text-2xl ml-10 font-bold '>Read about our blogs for more <br /> information on our processes</h1>
        </div>
        {/* ----- **** ---- */}
        <div className='mt-10 p-4  flex items-center'>
            <img className='p-6 border-2 border-varal-blue rounded-md' src={require('../Assets/Vector-4.png')} alt="img" />
            <div className='ml-4'>
            <h3 className='font-medium text-2xl '>How to start a company <br/> formation in Dubai</h3>
            <p className='text-varal-blue text-2xl' >5 Minutes</p>
            </div>
        </div>
        <div className='mt-2 p-4  flex items-center'>
            <img className='p-6 border-2 border-varal-blue rounded-md' src={require('../Assets/Vector-4.png')} alt="img" />
            <div className='ml-4'>
            <h3 className='font-medium text-2xl '>How to start an Offshore <br/>company formation in Dubai</h3>
            <p className='text-varal-blue text-2xl' >5 Minutes</p>
            </div>
        </div>
        <div className='mt-4 p-4 bg-varal-blue rounded-md text-white flex items-center'>
            <img className='p-6 border-2 border-white bg-white rounded-md' src={require('../Assets/Vector-4.png')} alt="img" />
            <div className='ml-4'>
            <h3 className='font-medium text-2xl '>SEO Dubai: Who benefits<br/>the most?</h3>
            <p className='text-2xl' >5 Minutes</p>
            </div>
        </div>
        {/* ----******---- */}

        <div className='relative mt-20 mb-10 '>
            <div className='h-16 w-2 bg-varal-blue absolute ' ></div>
            <h1 className='text-2xl ml-6 font-bold '>Satisfied we are When Our <br />Customers Are Happy</h1>
        </div>

        <div className='flex gap-4 relative' >
            <img className='p-2 border-2 border-varal-blue mt-2 rounded-[50%] w-16 h-16  ' src={require('../Assets/Vector-3.png')} alt="img" />
            <div className='w-14 h-[3px] bg-varal-blue absolute top-32 '></div>
            <div>
                <p className='text-xl font-body'>"I am very happy with them. I'll <br /> continue to use their services in <br /> future & highly recommend them to <br /> anyone"</p>
                <p className='mt-1 text-xl font-semibold'>Muhib Abrar</p>
            </div>
        </div>
        <div className='flex gap-4 relative my-10' >
            <img className='p-2 border-2 border-varal-blue mt-2 rounded-[50%] w-16 h-16  ' src={require('../Assets/Vector-3.png')} alt="img" />
            <div className='w-14 h-[3px] bg-varal-blue absolute top-32 '></div>
            <div>
                <p className='text-xl font-body'>"Your advice was so complete that I <br /> actually realized how beneficial <br />this would be to my clients and my <br />business "</p>
                <p className='mt-1 text-xl font-semibold'>Mark Swann</p>
            </div>
        </div>
        <div className='flex gap-4 relative ' >
            <img className='p-2 border-2 border-varal-blue mt-2 rounded-[50%] w-16 h-16  ' src={require('../Assets/Vector-3.png')} alt="img" />
            <div className='w-14 h-[3px] bg-varal-blue absolute top-32 '></div>
            <div>
                <p className='text-xl font-body'>"Rama has a high level of integrity, <br /> intellect, knowledge of his business,<br /> resourcefulness and <br /> humanity."</p>
                <p className='mt-1 text-xl font-semibold'>Colin Saldahna</p>
            </div>
        </div>
    </div>
  )
}

export default Section6Left