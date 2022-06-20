import Image from 'next/image'
import React from 'react'
import ImageFill from '../public/assets/icons/bi_image-fill.svg'

function ExploreChallenges() {
  return (
    <>
      <div className='absolute w-full h-[324px] left-0 top-[1731px] bg-[#002A3B]'>
        <h1 className='absolute w-[353px] h-[40px] left-[543px] top-[72px] font-poppins font-[600] leading-[40px] text-[28px] flex items-center text-center text-white'>Explore Challenges</h1>

        <input type="text" className='absolute w-[829px] h-[50px] top-[176px] left-[238px] bg-white rounded-[12px] outline-none shadow-forSearch pl-[67px] pt-[15px]' placeholder='Search' />

        {/* Filter  */}
        <div className='bg-white cursor-pointer absolute w-[110px] h-[50px] left-[1092px] top-[176px] rounded-[12px] border-[1px] border-solid border-[#EAEAEA]'>
          <div className='absolute w-[103px] h-[26px] left-[23px] top-[12px] font-[400] text-[18px] leading-[26px] text-black'>

            <p>Filter</p>
            <div className='absolute w-[13px] h-[6px] left-[58px] top-[10px] border-[2px] border-solid border-[#000000]'>
              <Image
                src={ImageFill}
                alt='' />
            </div>

          </div>
        </div>


      </div>
    </>
  )
}

export default ExploreChallenges