import React from 'react'
import Image from 'next/image'
import MainLogo from '../public/assets/icons/MainLogo.svg'
import AI_1 from '../public/assets/icons/AI_1.svg'
import AI_2 from '../public/assets/icons/AI_2.svg'
import Vector50kdata_scie from '../public/assets/icons/Vector50kdata_scie.svg'
import Vector50k_head from '../public/assets/icons/Vector50k_head.svg'
import VectorAI_Challenge_Host from '../public/assets/icons/VectorAI_Challenge_Host.svg'
import VectorAI_Challenge_Host_Eye1 from '../public/assets/icons/VectorAI_Challenge_Host_Eye1.svg'
import VectorAI_Challenge_Host_Mouth from '../public/assets/icons/VectorAI_Challenge_Host_Mouth.svg'
import rocket from '../public/assets/cardimage/rocket.png'
import Link from 'next/link'

function Navbar() {
    return (
        <>
            <div className='bg-[#003145] w-full h-[625px] top-[4px]'>

                {/* Navbar */}
                <div className='w-full bg-[#FFFFFF] relative h-[64px]'>
                    <Link href={'/'}>
                        <div className="w-[87px] h-[38.11px] absolute top-[13px] left-[89px] flex items-center cursor-pointer">
                            <Image src={MainLogo} alt="Main logo" />
                        </div>
                    </Link>
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
                    <Link href={'/create-challenge'}>
                        <button className='absolute w-[198px] h-[47px] left-[205px] top-[489px] bg-[#FFFFFF] rounded-[10px] font-poppins font-[600] text-[18px] text-center text-[#003145] leading-[18px] hover:bg-[#e4e2e2]'>Create Challenge</button>
                    </Link>
                </div>

                {/* Rocket Image */}
                <div className="right absolute w-[242px] h-[294px] left-[1050.34px] top-[170px] bg-[#003145]">
                    <Image
                        src={rocket}
                        alt='Rocket image'
                    />
                </div>
            </div>

            <div className='w-full h-[200px] absolute bg-[#002A3B]'>
                {/* AI Box */}
                <div className='absolute w-[55px] h-[55px] left-[184px] top-[72px] bg-[#F2F4FF] rounded-[15px]'>
                    <div className='absolute w-[22.5px] h-[22.5px] top-[16.75px] left-[16.75px] text-[#002A3B]'>
                        <Image src={AI_1} alt='AI box1' />
                    </div>
                    <div className='absolute w-[9.05px] h-[10px] top-[13.3px] left-[23.5px] text-[#002A3B]'>
                        <Image src={AI_2} alt='AI box2' />
                    </div>
                </div>
                <h3 className='absolute top-[80px] left-[261px] w-[157px] font-[700] text-[24px] leading-[20px] text-[#FFFFFF] font-Inter'>100K+</h3>
                <p className='absolute top-[105px] left-[261px] font-[500] text-[16px] leading-[20px] text-white font-Inter'>AI model submissions</p>
                {/* Line  */}
                <div className="absolute w-[1px] h-[38px] left-[493px] top-[79px] bg-[#C4C4C4]"></div>

                {/* Data Science Box */}
                <div className='absolute w-[55px] h-[55px] left-[609px] top-[72px] bg-[#F2F4FF] rounded-[15px]'>
                    <div className='absolute w-[8.33px] h-[8.33px] top-[13px] left-[19.17px] text-[#002A3B]'>
                        <Image src={Vector50k_head} alt='Data Scientist box 1' />
                    </div>
                    <div className='absolute w-[25px] h-[23.96px] top-[16.04px] left-[15px] text-[#002A3B]'>
                        <Image src={Vector50kdata_scie} alt='Data Scientist box 2' />
                    </div>
                </div>
                <h3 className='absolute top-[80px] left-[696px] w-[83px] font-[700] text-[24px] leading-[20px] text-[#FFFFFF] font-Inter'>50K+</h3>
                <p className='absolute top-[105px] left-[696px] font-[500] text-[16px] leading-[20px] text-white font-Inter'>Data Scientists</p>
                {/* Line  */}
                <div className="absolute w-[1px] h-[38px] left-[919px] top-[79px] bg-[#C4C4C4]"></div>


                {/* Challenges Box */}
                <div className='absolute w-[55px] h-[55px] left-[1011px] top-[72px] bg-[#F2F4FF] rounded-[15px]'>
                    <div className='absolute w-[2.17px] h-[2.17px] top-[0.6px] left-[23.5px] text-[#002A3B]'>
                        <Image src={VectorAI_Challenge_Host_Eye1} alt='AI box' />
                    </div>
                    <div className='absolute w-[2.17px] h-[2.17px] top-[0.6px] left-[30.5px] text-[#002A3B]'>
                        <Image src={VectorAI_Challenge_Host_Eye1} alt='AI box' />
                    </div>
                    <div className='absolute w-[3px] h-[1.08px] top-[0.2px] left-[26.88px] text-[#002A3B]'>
                        <Image src={VectorAI_Challenge_Host_Mouth} alt='AI box' />
                    </div>
                    <div className='absolute w-[19.5px] h-[26px] top-[13px] left-[18.25px] text-[#002A3B]'>
                        <Image src={VectorAI_Challenge_Host} alt='AI box' />
                    </div>
                </div>
                <h3 className='absolute top-[80px] left-[1087px] w-[83px] font-[700] text-[24px] leading-[20px] text-[#FFFFFF] font-Inter'>100+</h3>
                <p className='absolute top-[105px] left-[1087px] font-[500] text-[16px] leading-[20px] text-white font-Inter'>Data Scientists</p>
            </div>
        </>
    )
}

export default Navbar