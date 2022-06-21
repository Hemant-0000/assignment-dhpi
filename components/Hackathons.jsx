import React from 'react'
import Image from 'next/image'
import Group1 from '../public/assets/cardimage/Group 1000002771.png'
import Group2 from '../public/assets/cardimage/Group 1000002766.png'
import Group3 from '../public/assets/cardimage/Group 1000002767.png'
import Group4 from '../public/assets/cardimage/Group 1000002772.png'
import Group5 from '../public/assets/cardimage/Group 1000002773.png'
import Group6 from '../public/assets/cardimage/Group 1000002466.png'
import Vectorparticipate from '../public/assets/icons/Vectorparticipate.svg'
import Vectortick_partci from '../public/assets/icons/Vectortick_partci.svg'


function Hackathons() {
    return (
        <>
            <div className='w-full h-[1196px] absolute left-0 top-[2055px] bg-[#003145]'>
                {/* Hackathon 1 */}
                <div className='absolute w-[354px] h-[473px] top-[75px] left-[134px] bg-white shadow-forHackathon rounded-[15px]'>

                    {/* Image  */}
                    <div className='absolute w-[354px] h-[473px]'>
                        <Image
                            src={Group1}
                            alt=''
                        />
                    </div>

                    {/* Hackathon Status*/}
                    <div className='absolute w-[87px] h-[21px] left-[133px] top-[199px] bg-statusColor rounded-[5px] font-[600] text-[12px] leading-[16px] text-center text-[#666666] font-Inter'><span className='absolute top-[2px] left-[13px]'>Upcoming</span></div>

                    <h2 className='font-poppins w-[246px] h-[44px] absolute left-[54px] top-[239px] font-[600] text-[16px] leading-[26px] flex items-center text-center text-black'>Data Science Bootcamp - Graded Datathon</h2>

                    {/* Timer  */}
                    <h3 className='absolute w-[142px] h-[13px] left-[106px] top-[309px] font-poppins font-[500] text-[14px] leading-[14px] text-center text-[#444444]'>Starts in</h3>

                    {/* days */}
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[114px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545]'>00</p>
                    <p className='w-[28.77px] h-[9.89px] absolute top-[362px] left-[111px] font-Inter font-[500] text-[10px] leading-[10px] text-center text-[#4F4F4F]'>Days</p>
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[133px] font-poppins font-[700] text-[18px] leading-[28px] text-center text-[#454545]'>:</p>

                    {/* Hours */}
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[157px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545] text-center'>15</p>
                    <p className='w-[37px] h-[10px] absolute top-[362px] left-[154px] font-Inter font-[500] text-[10px] leading-[10px] text-center text-[#4F4F4F]'>Hours</p>
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[182px] font-poppins font-[700] text-[18px] leading-[28px] text-center text-[#454545]'>:</p>

                    {/* Mins */}
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[209px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545]'>22</p>
                    <p className='w-[28.77px] h-[9.89px] absolute top-[362px] left-[206px] font-Inter font-[500] text-[10px] leading-[10px] text-center text-[#4F4F4F]'>Mins</p>

                    {/* Participate Button  */}
                    <button className='absolute w-[182.55px] h-[42px] left-[86px] top-[404px] bg-[#44924C] rounded-[10px]'>
                        <div className='absolute w-[14.06px] h-[14.05px] left-[17.97px] top-[10px] '>
                            <Image className='border-[1.21875px] border-solid border-[#FFFFFF]' src={Vectorparticipate} alt='' />
                        </div>
                        <div className='absolute w-[9.66px] h-[7.31px] left-[22.27px] top-[5.63px] '>
                            <Image className='border-[1.21875px] border-solid border-[#FFFFFF]' src={Vectortick_partci} alt='' />
                        </div>

                        <span className='absolute w-[113px] h-[18px] top-[12px] left-[48px] font-poppins  font-[600] text-[14px] leading-[18px] text-center text-white'> Participate Now</span>
                    </button>


                </div>

                {/* Hackathon 2 */}
                <div className='absolute w-[354px] h-[473px] top-[75px] left-[543px] bg-white shadow-forHackathon rounded-[15px]'>

                    {/* Image  */}
                    <div className='absolute w-[354px] h-[473px]'>
                        <Image
                            src={Group2}
                            alt=''
                        />
                    </div>

                    {/* Hackathon Status*/}
                    <div className='absolute w-[87px] h-[21px] left-[133px] top-[199px] bg-statusColor rounded-[5px] font-[600] text-[12px] leading-[16px] text-center text-[#666666] font-Inter'><span className='absolute top-[2px] left-[13px]'>Upcoming</span></div>

                    <h2 className='font-poppins w-[246px] h-[44px] absolute left-[54px] top-[239px] font-[600] text-[16px] leading-[26px] flex items-center text-center text-black'>Data Sprint 72 - Butterfly Identification</h2>

                    {/* Timer  */}
                    <h3 className='absolute w-[142px] h-[13px] left-[106px] top-[309px] font-poppins font-[500] text-[14px] leading-[14px] text-center text-[#444444]'>Starts in</h3>

                    {/* days */}
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[114px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545]'>00</p>
                    <p className='w-[28.77px] h-[9.89px] absolute top-[362px] left-[111px] font-Inter font-[500] text-[10px] leading-[10px] text-center text-[#4F4F4F]'>Days</p>
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[133px] font-poppins font-[700] text-[18px] leading-[28px] text-center text-[#454545]'>:</p>

                    {/* Hours */}
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[157px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545] text-center'>12</p>
                    <p className='w-[37px] h-[10px] absolute top-[362px] left-[154px] font-Inter font-[500] text-[10px] leading-[10px] text-center text-[#4F4F4F]'>Hours</p>
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[182px] font-poppins font-[700] text-[18px] leading-[28px] text-center text-[#454545]'>:</p>

                    {/* Mins */}
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[209px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545]'>34</p>
                    <p className='w-[28.77px] h-[9.89px] absolute top-[362px] left-[206px] font-Inter font-[500] text-[10px] leading-[10px] text-center text-[#4F4F4F]'>Mins</p>

                    {/* Participate Button  */}
                    <button className='absolute w-[182.55px] h-[42px] left-[86px] top-[404px] bg-[#44924C] rounded-[10px]'>
                        <div className='absolute w-[14.06px] h-[14.05px] left-[17.97px] top-[10px] '>
                            <Image className='border-[1.21875px] border-solid border-[#FFFFFF]' src={Vectorparticipate} alt='' />
                        </div>
                        <div className='absolute w-[9.66px] h-[7.31px] left-[22.27px] top-[5.63px] '>
                            <Image className='border-[1.21875px] border-solid border-[#FFFFFF]' src={Vectortick_partci} alt='' />
                        </div>

                        <span className='absolute w-[113px] h-[18px] top-[12px] left-[48px] font-poppins  font-[600] text-[14px] leading-[18px] text-center text-white'> Participate Now</span>
                    </button>

                </div>

                {/* Hackathon 3 */}
                <div className='absolute w-[354px] h-[473px] top-[75px] left-[952px] bg-white shadow-forHackathon rounded-[15px]'>

                    {/* Image  */}
                    <div className='absolute w-[354px] h-[473px]'>
                        <Image
                            src={Group3}
                            alt=''
                        />
                    </div>

                    {/* Hackathon Status*/}
                    <div className='absolute w-[87px] h-[21px] left-[133px] top-[199px] bg-statusColorActive rounded-[5px]'>
                        <span className='absolute top-[2px] left-[23.5px] font-[600] text-[12px] leading-[16px] text-[#44924C] font-Inter'>Active</span>
                    </div>

                    <h2 className='font-poppins w-[246px] h-[44px] absolute left-[54px] top-[239px] font-[600] text-[16px] leading-[26px] flex items-center text-center text-black'>Data Sprint 71 - Weather Recognition</h2>

                    {/* Timer  */}
                    <h3 className='absolute w-[142px] h-[13px] left-[106px] top-[309px] font-poppins font-[500] text-[14px] leading-[14px] text-center text-[#444444]'>Ends in</h3>

                    {/* days */}
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[114px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545]'>01</p>
                    <p className='w-[28.77px] h-[9.89px] absolute top-[362px] left-[111px] font-Inter font-[500] text-[10px] leading-[10px] text-center text-[#4F4F4F]'>Days</p>
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[133px] font-poppins font-[700] text-[18px] leading-[28px] text-center text-[#454545]'>:</p>

                    {/* Hours */}
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[157px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545] text-center'>17</p>
                    <p className='w-[37px] h-[10px] absolute top-[362px] left-[154px] font-Inter font-[500] text-[10px] leading-[10px] text-center text-[#4F4F4F]'>Hours</p>
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[182px] font-poppins font-[700] text-[18px] leading-[28px] text-center text-[#454545]'>:</p>

                    {/* Mins */}
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[209px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545]'>10</p>
                    <p className='w-[28.77px] h-[9.89px] absolute top-[362px] left-[206px] font-Inter font-[500] text-[10px] leading-[10px] text-center text-[#4F4F4F]'>Mins</p>

                    {/* Participate Button  */}
                    <button className='absolute w-[182.55px] h-[42px] left-[86px] top-[404px] bg-[#44924C] rounded-[10px]'>
                        <div className='absolute w-[14.06px] h-[14.05px] left-[17.97px] top-[10px] '>
                            <Image className='border-[1.21875px] border-solid border-[#FFFFFF]' src={Vectorparticipate} alt='' />
                        </div>
                        <div className='absolute w-[9.66px] h-[7.31px] left-[22.27px] top-[5.63px] '>
                            <Image className='border-[1.21875px] border-solid border-[#FFFFFF]' src={Vectortick_partci} alt='' />
                        </div>

                        <span className='absolute w-[113px] h-[18px] top-[12px] left-[48px] font-poppins  font-[600] text-[14px] leading-[18px] text-center text-white'> Participate Now</span>
                    </button>

                </div>


                {/* Hackathon 4 */}
                <div className='absolute w-[354px] h-[473px] top-[598px] left-[134px] bg-white shadow-forHackathon rounded-[15px]'>

                    {/* Image  */}
                    <div className='absolute w-[354px] h-[473px]'>
                        <Image
                            src={Group4}
                            alt=''
                        />
                    </div>

                    {/* Hackathon Status*/}
                    <div className='absolute w-[87px] h-[21px] left-[133px] top-[199px] bg-statusColorActive rounded-[5px]'>
                        <span className='absolute top-[2px] left-[23.5px] font-[600] text-[12px] leading-[16px] text-[#44924C] font-Inter'>Active</span>
                    </div>

                    <h2 className='font-poppins w-[246px] h-[44px] absolute left-[54px] top-[239px] font-[600] text-[16px] leading-[26px] flex items-center text-center text-black'>Data Sprint 70-Airline Passenger Satisfaction</h2>

                    {/* Timer  */}
                    <h3 className='absolute w-[142px] h-[13px] left-[106px] top-[309px] font-poppins font-[500] text-[14px] leading-[14px] text-center text-[#444444]'>Ends in</h3>

                    {/* days */}
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[114px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545]'>00</p>
                    <p className='w-[28.77px] h-[9.89px] absolute top-[362px] left-[111px] font-Inter font-[500] text-[10px] leading-[10px] text-center text-[#4F4F4F]'>Days</p>
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[133px] font-poppins font-[700] text-[18px] leading-[28px] text-center text-[#454545]'>:</p>

                    {/* Hours */}
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[157px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545] text-center'>11</p>
                    <p className='w-[37px] h-[10px] absolute top-[362px] left-[154px] font-Inter font-[500] text-[10px] leading-[10px] text-center text-[#4F4F4F]'>Hours</p>
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[182px] font-poppins font-[700] text-[18px] leading-[28px] text-center text-[#454545]'>:</p>

                    {/* Mins */}
                    <p className='w-[31.07px] h-[29.92px] absolute top-[330px] left-[209px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545]'>27</p>
                    <p className='w-[28.77px] h-[9.89px] absolute top-[362px] left-[206px] font-Inter font-[500] text-[10px] leading-[10px] text-center text-[#4F4F4F]'>Mins</p>

                    {/* Participate Button  */}
                    <button className='absolute w-[182.55px] h-[42px] left-[86px] top-[404px] bg-[#44924C] rounded-[10px]'>
                        <div className='absolute w-[14.06px] h-[14.05px] left-[17.97px] top-[10px] '>
                            <Image className='border-[1.21875px] border-solid border-[#FFFFFF]' src={Vectorparticipate} alt='' />
                        </div>
                        <div className='absolute w-[9.66px] h-[7.31px] left-[22.27px] top-[5.63px] '>
                            <Image className='border-[1.21875px] border-solid border-[#FFFFFF]' src={Vectortick_partci} alt='' />
                        </div>

                        <span className='absolute w-[113px] h-[18px] top-[12px] left-[48px] font-poppins  font-[600] text-[14px] leading-[18px] text-center text-white'> Participate Now</span>
                    </button>

                </div>

                
                {/* Hackathon 5 */}
                <div className='absolute w-[354px] h-[473px] top-[598px] left-[543px] bg-white shadow-forHackathon rounded-[15px]'>

                    {/* Image  */}
                    <div className='absolute w-[354px] h-[473px]'>
                        <Image
                            src={Group5}
                            alt=''
                        />
                    </div>

                    {/* Hackathon Status*/}
                    <div className='absolute w-[87px] h-[21px] left-[133px] top-[199px] bg-statusColorPast rounded-[5px]'>
                        <span className='absolute w-[61px] h-[14px] top-[2px] left-[13px] font-[600] text-[12px] leading-[16px] text-[#666666] text-center font-Inter'>Past</span>
                    </div>

                    <h2 className='font-poppins w-[246px] h-[44px] absolute left-[54px] top-[239px] font-[600] text-[16px] leading-[26px] flex items-center text-center text-black'>Engineering Graduates Employment Outcomes</h2>

                    {/* Timer  */}
                    <h3 className='absolute w-[142px] h-[13px] left-[106px] top-[309px] font-poppins font-[500] text-[14px] leading-[14px] text-center text-[#444444]'>Ended on</h3>

                    {/* days */}
                    <p className='w-[206px] h-[30px] absolute top-[342px] left-[72px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545]'>16th May&#8217;22 09:00 PM</p>

                    {/* Participate Button  */}
                    <button className='absolute w-[182.55px] h-[42px] left-[86px] top-[404px] bg-[#44924C] rounded-[10px]'>
                        <div className='absolute w-[14.06px] h-[14.05px] left-[17.97px] top-[10px] '>
                            <Image className='border-[1.21875px] border-solid border-[#FFFFFF]' src={Vectorparticipate} alt='' />
                        </div>
                        <div className='absolute w-[9.66px] h-[7.31px] left-[22.27px] top-[5.63px] '>
                            <Image className='border-[1.21875px] border-solid border-[#FFFFFF]' src={Vectortick_partci} alt='' />
                        </div>

                        <span className='absolute w-[113px] h-[18px] top-[12px] left-[48px] font-poppins  font-[600] text-[14px] leading-[18px] text-center text-white'> Participate Now</span>
                    </button>

                </div>
                
                {/* Hackathon 5 */}
                <div className='absolute w-[354px] h-[473px] top-[598px] left-[952px] bg-white shadow-forHackathon rounded-[15px]'>

                    {/* Image  */}
                    <div className='absolute w-[354px] h-[473px]'>
                        <Image
                            src={Group6}
                            alt=''
                        />
                    </div>

                    {/* Hackathon Status*/}
                    <div className='absolute w-[87px] h-[21px] left-[133px] top-[199px] bg-statusColorPast rounded-[5px]'>
                        <span className='absolute w-[61px] h-[14px] top-[2px] left-[13px] font-[600] text-[12px] leading-[16px] text-[#666666] text-center font-Inter'>Past</span>
                    </div>

                    <h2 className='font-poppins w-[246px] h-[44px] absolute left-[54px] top-[239px] font-[600] text-[16px] leading-[26px] flex items-center text-center text-black'>Travel Insurance Claim Prediction</h2>

                    {/* Timer  */}
                    <h3 className='absolute w-[142px] h-[13px] left-[106px] top-[309px] font-poppins font-[500] text-[14px] leading-[14px] text-center text-[#444444]'>Ended on</h3>

                    {/* days */}
                    <p className='w-[206px] h-[30px] absolute top-[342px] left-[72px] font-poppins font-[600] text-[18px] leading-[28px] text-[#454545]'>16th May&#8217;22 09:00 PM</p>

                    {/* Participate Button  */}
                    <button className='absolute w-[182.55px] h-[42px] left-[86px] top-[404px] bg-[#44924C] rounded-[10px]'>
                        <div className='absolute w-[14.06px] h-[14.05px] left-[17.97px] top-[10px] '>
                            <Image className='border-[1.21875px] border-solid border-[#FFFFFF]' src={Vectorparticipate} alt='' />
                        </div>
                        <div className='absolute w-[9.66px] h-[7.31px] left-[22.27px] top-[5.63px] '>
                            <Image className='border-[1.21875px] border-solid border-[#FFFFFF]' src={Vectortick_partci} alt='' />
                        </div>

                        <span className='absolute w-[113px] h-[18px] top-[12px] left-[48px] font-poppins  font-[600] text-[14px] leading-[18px] text-center text-white'> Participate Now</span>
                    </button>

                </div>

            </div>
        </>
    )
}

export default Hackathons