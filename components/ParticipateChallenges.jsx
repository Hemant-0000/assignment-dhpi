import Image from 'next/image'
import React from 'react'
import AIVector from '../public/assets/icons/Vector.svg'


function ParticipateChallenges() {
    return (
        <>
            <div className='w-full h-[1150px] left-0 top-[829px] bg-[#FFFFFF]'>
                {/* Heading  */}
                <h1 className='absolute top-[919px] left-[264px] w-[912px] h-[24px] font-poppins font-[600] text-[32px] leading-[20px] text-center text-[#000000]'>Why Participate in <span className='text-[#44924C]'>AI Challenges?</span></h1>

                {/* Rectangle 1 */}
                <div className="absolute w-[542px] h-[276px] left-[160px] top-[1015px] bg-[#F8F9FD] rounded-[20px]">
                    <div className='absolute top-[65.72px] left-[33.69px]'>
                        <Image
                        src={AIVector}
                        alt=''
                        />
                    </div>
                    <h3 className='absolute top-[107px] left-[31px] font-poppins text-black w-[266px] h-[52px] font-[600] text-[24px] leading-[50px] tracking-[-0.03em]'>Prove your skills</h3>
                    <p className='absolute top-[164px] left-[31px] w-[471px] h-[50px] font-poppins font-[500] text-[16px] leading-[24px] tracking-[-0.02em] text-[#64607D]'>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>

                </div>

                {/* Rectangle 2 */}
                <div className="absolute w-[542px] h-[276px] left-[737px] top-[1015px] bg-[#F8F9FD] rounded-[20px]">
                    <div className='absolute top-[65.72px] left-[33.69px]'>
                        <Image
                        src={AIVector}
                        alt=''
                        />
                    </div>
                    <h3 className='absolute top-[107px] left-[31px] font-poppins text-black w-[266px] h-[52px] font-[600] text-[24px] leading-[50px] tracking-[-0.03em]'>Learn from community</h3>
                    <p className='absolute top-[164px] left-[31px] w-[471px] h-[50px] font-poppins font-[500] text-[16px] leading-[24px] tracking-[-0.02em] text-[#64607D]'>One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</p>

                </div>

                {/* Rectangle 3 */}
                <div className="absolute w-[542px] h-[276px] left-[160px] top-[1330px] bg-[#F8F9FD] rounded-[20px]">
                    <div className='absolute top-[65.72px] left-[33.69px]'>
                        <Image
                        src={AIVector}
                        alt=''
                        />
                    </div>
                    <h3 className='absolute top-[107px] left-[31px] font-poppins text-black w-[266px] h-[52px] font-[600] text-[24px] leading-[50px] tracking-[-0.03em]'>Challenge yourself</h3>
                    <p className='absolute top-[164px] left-[31px] w-[471px] h-[50px] font-poppins font-[500] text-[16px] leading-[24px] tracking-[-0.02em] text-[#64607D]'>There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>

                </div>


                {/* Rectangle 4 */}
                <div className="absolute w-[542px] h-[276px] left-[737px] top-[1332px] bg-[#F8F9FD] rounded-[20px]">
                    <div className='absolute top-[65.72px] left-[33.69px]'>
                        <Image
                        src={AIVector}
                        alt=''
                        />
                    </div>
                    <h3 className='absolute top-[107px] left-[31px] font-poppins text-black w-[266px] h-[52px] font-[600] text-[24px] leading-[50px] tracking-[-0.03em]'>Earn recognition</h3>
                    <p className='absolute top-[164px] left-[31px] w-[471px] h-[50px] font-poppins font-[500] text-[16px] leading-[24px] tracking-[-0.02em] text-[#64607D]'>You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</p>

                </div>

            </div>
        </>
    )
}

export default ParticipateChallenges