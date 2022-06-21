import Image from 'next/image'
import React from 'react'
import Caretfilter from '../public/assets/icons/Caretfilter.svg'
import Vectorsearch from '../public/assets/icons/Vectorsearch.svg'

function ExploreChallenges() {
  return (
    <>
      <div className='absolute w-full h-[324px] left-0 top-[1731px] bg-[#002A3B]'>
        <h1 className='absolute w-[353px] h-[40px] left-[543px] top-[72px] font-poppins font-[600] leading-[40px] text-[28px] flex items-center text-center text-white'>Explore Challenges</h1>

        <div className='absolute w-[829px] h-[50px] top-[176px] left-[238px] bg-white rounded-[12px] shadow-forSearch'>
        <div className='absolute left-[39.04px] top-[17.03px]'><Image src={Vectorsearch} alt='' /></div>
        <input className='absolute w-[762px] h-[50px] left-[67px] top-0 font-Inter font-[300] text-[18px] outline-none rounded-[12px]' type="text" placeholder='Search' />
        </div>

        {/* Filter  */}
        <div className='bg-white cursor-pointer absolute w-[110px] h-[50px] left-[1092px] top-[176px] rounded-[12px] border-[1px] border-solid border-[#EAEAEA]'>
          <div className='absolute w-[103px] h-[26px] left-[23px] top-[12px] font-Inter font-[900] text-[18px] leading-[26px] text-black'>Filter
            <div className='w-[13px] h-[6px] absolute left-[52px] top-[-2px] '>
              <Image className='border-[2px] border-solid border-black' src={Caretfilter} alt='' />
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default ExploreChallenges