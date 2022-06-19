import React from 'react'
import Image from 'next/image'
import MainLogo from '../public/assets/icons/Robot.svg'
import AIVector from '../public/assets/icons/Vector.svg'

function Navbar() {
    return (
        <>
            <div className='bg-[#003145] w-full h-[625px] top-[4px]'>

                {/* Navbar */}
                <div className='w-full bg-[#FFFFFF] relative h-[64px]'>
                    <div className='w-[87px] h-[38.11px] absolute top-[13px] left-[89px] flex items-center '>
                        <Image
                            src={MainLogo}
                            alt='Main logo'
                        />
                        <p className='ml-2 font-bold'>DPhi</p>
                    </div>
                </div>

                {/* Rocket */}
                <div className="left">
                    {/* Yellow stick */}
                    <div className='w-[9.71px] h-[115.91px] top-[188px] left-[143px] bg-[#FFCE5C] absolute'></div>
                    {/* Main text */}
                    <h1 className='text-[#FFFFFF] absolute w-[643px] h-[112px] left-[205px] top-[190px] text-[48px] font-[600] leading-[56px] line-[56px] font-poppins'>Accelerate Innovation with Global AI Challenges</h1>
                    {/* description  */}
                    <p className='absolute w-[531px] h-[112px] left-[205px] top-[340px] font-poppins font-[500] text-[18px] leading-[28px] text-[#ECECEC]'>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                    {/* Button */}
                    <button className='absolute w-[198px] h-[47px] left-[205px] top-[489px] bg-[#FFFFFF] rounded-[10px] font-poppins font-[600] text-[18px] text-center text-[#003145] leading-[18px]'>Create Challenge</button>
                </div>

                {/* Rocket Image */}
                <div className="right absolute w-[242px] h-[294px] left-[1050.34px] top-[170px] bg-[#003145] transform rotate-[21.41deg]">
                    <Image
                        src={MainLogo}
                        alt='Rocket image'
                    />
                </div>
            </div>

            <div className='w-full h-[200px] absolute bg-[#002A3B]'>
                {/* AI Box */}
                <div className='absolute w-[55px] h-[55px] left-[184px] top-[72px] bg-[#F2F4FF] rounded-[15px]'>
                    <div className='absolute w-[22.5px] h-[22.5px] top-[16.75px] left-[16.75px] text-[#002A3B]'>
                        <Image
                            src={AIVector}
                            alt='AI box'
                        />
                    </div>
                </div>
                <h3 className='absolute top-[80px] left-[261px] w-[157px] font-[700] text-[24px] leading-[20px] text-[#FFFFFF] '>100K+</h3>
                <p className='absolute top-[105px] left-[261px] font-[500] text-[16px] leading-[20px] text-white'>AI model submissions</p>
                {/* Line  */}
                <div className="absolute w-[1px] h-[38px] left-[493px] top-[79px] bg-[#C4C4C4]"></div>

                {/* Data Science Box */}
                <div className='absolute w-[55px] h-[55px] left-[609px] top-[72px] bg-[#F2F4FF] rounded-[15px]'>
                    <div className='absolute w-[22.5px] h-[22.5px] top-[16.75px] left-[16.75px] text-[#002A3B]'>
                        <Image
                            src={AIVector}
                            alt='AI box'
                        />
                    </div>
                </div>
                <h3 className='absolute top-[80px] left-[696px] w-[83px] font-[700] text-[24px] leading-[20px] text-[#FFFFFF] '>50K+</h3>
                <p className='absolute top-[105px] left-[696px] font-[500] text-[16px] leading-[20px] text-white'>Data Scientists</p>
                {/* Line  */}
                <div className="absolute w-[1px] h-[38px] left-[919px] top-[79px] bg-[#C4C4C4]"></div>


                {/* Challenges Box */}
                <div className='absolute w-[55px] h-[55px] left-[1011px] top-[72px] bg-[#F2F4FF] rounded-[15px]'>
                    <div className='absolute w-[22.5px] h-[22.5px] top-[16.75px] left-[16.75px] text-[#002A3B]'>
                        <Image
                            src={AIVector}
                            alt='AI box'
                        />
                    </div>
                </div>
                <h3 className='absolute top-[80px] left-[1087px] w-[83px] font-[700] text-[24px] leading-[20px] text-[#FFFFFF] '>100+</h3>
                <p className='absolute top-[105px] left-[1087px] font-[500] text-[16px] leading-[20px] text-white'>Data Scientists</p>
            </div>
        </>
    )
}

export default Navbar