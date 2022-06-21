import Image from 'next/image'
import React from 'react'
import AIVector from '../public/assets/icons/Vector.svg'
import Vectorprove_your_skills from '../public/assets/icons/Vectorprove_your_skills.svg'
import Vectorprove_your_skills_arrow from '../public/assets/icons/Vectorprove_your_skills_arrow.svg'
import Vectorchallenge_yourself_rectangel2 from '../public/assets/icons/Vectorchallenge_yourself_rectangel2.svg'
import Vectortop_stick_rectangle3 from '../public/assets/icons/Vectortop_stick_rectangle3.svg'
import Vectormouth_rectangle3 from '../public/assets/icons/Vectormouth_rectangle3.svg'
import Vectoreyes_rectangle3 from '../public/assets/icons/Vectoreyes_rectangle3.svg'
import Vectorteeths_rectangle3 from '../public/assets/icons/Vectorteeths_rectangle3.svg'
import Vectorearn_recognition_rectangle4 from '../public/assets/icons/Vectorearn_recognition_rectangle4.svg'
import Vectorhead_rectangle4 from '../public/assets/icons/Vectorhead_rectangle4.svg'
import Vectorshoulder_rectangle4 from '../public/assets/icons/Vectorshoulder_rectangle4.svg'
import Vectordashes_rectangle4 from '../public/assets/icons/Vectordashes_rectangle4.svg'


function ParticipateChallenges() {
    return (
        <>
            <div className='w-full h-[1150px] left-0 top-[829px] bg-[#FFFFFF]'>
                {/* Heading  */}
                <h1 className='absolute top-[919px] left-[264px] w-[912px] h-[24px] font-poppins font-[600] text-[32px] leading-[20px] text-center text-[#000000]'>Why Participate in <span className='text-[#44924C]'>AI Challenges?</span></h1>

                {/* Rectangle 1 */}
                <div className="absolute w-[542px] h-[276px] left-[160px] top-[1015px] bg-[#F8F9FD] rounded-[20px]">
                    <div className='absolute top-[65.72px] left-[33.69px]'>
                        <Image src={Vectorprove_your_skills} alt=''/>
                    </div>
                    <div className='absolute top-[72.44px] left-[33.69px]'>
                        <Image src={Vectorprove_your_skills_arrow} alt=''/>
                    </div>
                    <h3 className='absolute top-[107px] left-[31px] font-poppins text-black w-[266px] h-[52px] font-[600] text-[24px] leading-[50px] tracking-[-0.03em]'>Prove your skills</h3>
                    <p className='absolute top-[164px] left-[31px] w-[471px] h-[50px] font-poppins font-[500] text-[16px] leading-[24px] tracking-[-0.02em] text-[#64607D]'>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>

                </div>

                {/* Rectangle 2 */}
                <div className="absolute w-[542px] h-[276px] left-[737px] top-[1015px] bg-[#F8F9FD] rounded-[20px]">
                    <div className='absolute top-[65.72px] left-[33.69px]'>
                        <Image src={AIVector} alt=''/>
                    </div>
                    <h3 className='absolute top-[107px] left-[31px] font-poppins text-black w-[266px] h-[52px] font-[600] text-[24px] leading-[50px] tracking-[-0.03em]'>Learn from community</h3>
                    <p className='absolute top-[164px] left-[31px] w-[471px] h-[50px] font-poppins font-[500] text-[16px] leading-[24px] tracking-[-0.02em] text-[#64607D]'>One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</p>

                </div>

                {/* Rectangle 3 */}
                <div className="absolute w-[542px] h-[276px] left-[160px] top-[1330px] bg-[#F8F9FD] rounded-[20px]">
                    <div className='absolute top-[65.72px] left-[33.69px]'>
                        <Image src={Vectorchallenge_yourself_rectangel2} alt='' />
                    </div>
                    <div className='absolute top-[49px] left-[50.5px]'>
                        <Image src={Vectortop_stick_rectangle3} alt='' />
                    </div>
                    <div className='absolute top-[73px] left-[41px]'>
                        <Image src={Vectormouth_rectangle3} alt='' />
                    </div>
                    <div className='absolute top-[60px] left-[41.8px]'>
                        <Image src={Vectoreyes_rectangle3} alt='' />
                    </div>
                    <div className='absolute top-[60px] left-[57.9px]'>
                        <Image src={Vectoreyes_rectangle3} alt='' />
                    </div>
                    <div className='absolute top-[73px] left-[45.9px]'>
                        <Image src={Vectorteeths_rectangle3} alt='' />
                    </div>
                    <div className='absolute top-[73px] left-[55px]'>
                        <Image src={Vectorteeths_rectangle3} alt='' />
                    </div>
                    <h3 className='absolute top-[107px] left-[31px] font-poppins text-black w-[266px] h-[52px] font-[600] text-[24px] leading-[50px] tracking-[-0.03em]'>Challenge yourself</h3>
                    <p className='absolute top-[164px] left-[31px] w-[471px] h-[50px] font-poppins font-[500] text-[16px] leading-[24px] tracking-[-0.02em] text-[#64607D]'>There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>

                </div>


                {/* Rectangle 4 */}
                <div className="absolute w-[542px] h-[276px] left-[737px] top-[1332px] bg-[#F8F9FD] rounded-[20px]">
                    <div className='absolute top-[65.72px] left-[33.69px]'>
                        <Image src={Vectorearn_recognition_rectangle4} alt='' />
                    </div>
                    <div className='absolute top-[68.9px] left-[40.74px]'>
                        <Image src={Vectorhead_rectangle4} alt='' />
                    </div>
                    <div className='absolute top-[75px] left-[39.5px]'>
                        <Image src={Vectorshoulder_rectangle4} alt='' />
                    </div>
                    <div className='absolute top-[71px] left-[58.66px]'>
                        <Image src={Vectordashes_rectangle4} alt='' />
                    </div>
                    <div className='absolute top-[63px] left-[58.66px]'>
                        <Image src={Vectordashes_rectangle4} alt='' />
                    </div>
                    <h3 className='absolute top-[107px] left-[31px] font-poppins text-black w-[266px] h-[52px] font-[600] text-[24px] leading-[50px] tracking-[-0.03em]'>Earn recognition</h3>
                    <p className='absolute top-[164px] left-[31px] w-[471px] h-[50px] font-poppins font-[500] text-[16px] leading-[24px] tracking-[-0.02em] text-[#64607D]'>You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</p>

                </div>

            </div>
        </>
    )
}

export default ParticipateChallenges