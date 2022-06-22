import React from "react";
import Image from "next/image";
import MainLogo from "../public/assets/icons/MainLogo.svg";
import Link from "next/link";
import Vectorimage_upload from "../public/assets/icons/Vectorimage_upload.svg";
import Caretfilter from '../public/assets/icons/Caretfilter.svg'
import Vectorcalender from '../public/assets/icons/Vectorcalender.svg'



function CreateChallenge() {
  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-[#FFFFFF] relative h-[64px]">
        <Link href={'/'}>
        <div className="w-[87px] h-[38.11px] absolute top-[13px] left-[89px] flex items-center cursor-pointer">
          <Image src={MainLogo} alt="Main logo" />
        </div>
        </Link>
      </div>

      {/* Challenge details  */}
      <div className="w-full h-[107px] absolute top-[64px] bg-[#F8F9FD]">
        <p className="w-[206px] h-[29px] absolute top-[41px] left-[89px] font-Inter font-[1000] text-[24px] leading-[29.05px] text-black">Challenge Details</p>
      </div>

      {/* Challenge Name  */}
      <h2 className="w-[163px] h-[21px] absolute top-[204px] left-[89px] font-Inter font-[800] text-[16px] leading-[19.36px] text-[#333333]">Challenge Name</h2>

      <input type="text" className="w-[453px] h-[39px] absolute top-[244px] left-[89px] rounded-[5px] border-[1px] border-solid border-[#B7B7B7] pl-2 py-1 font-poppins outline-none" />

      {/* Start Date  */}
      <h2 className="w-[163px] h-[21px] absolute top-[317px] left-[89px] font-Inter font-[800] text-[16px] leading-[19.36px] text-[#333333]">Start Date</h2>

      <div className="w-[453px] h-[39px] absolute top-[357px] left-[89px] rounded-[5px] border-[1px] border-solid border-[#B7B7B7]">
        <input type="text" className="absolute pl-[15px] pt-[5px] w-[450px] outline-none rounded-[5px]" placeholder="Add start date" />
        <div className="absolute top-[10px] left-[406px] cursor-pointer "><Image src={Vectorcalender} alt=''/></div>
      </div>

      {/* End Date  */}
      <h2 className="w-[163px] h-[21px] absolute top-[430px] left-[89px] font-Inter font-[800] text-[16px] leading-[19.36px] text-[#333333]">End Date</h2>

      <div className="w-[453px] h-[39px] absolute top-[470px] left-[89px] rounded-[5px] border-[1px] border-solid border-[#B7B7B7]">
        <input type="text" className="absolute pl-[15px] pt-[5px] w-[450px] outline-none rounded-[5px]" placeholder="Add end date" />
        <div className="absolute top-[10px] left-[406px] cursor-pointer "><Image src={Vectorcalender} alt=''/></div>
      </div>


      {/* Description  */}
      <h2 className="w-[163px] h-[21px] absolute top-[553px] left-[89px] font-Inter font-[800] text-[16px] leading-[19.36px] text-[#333333]">Description</h2>

      <textarea type='text' className="w-[817px] h-[252px] absolute top-[593px] left-[89px] rounded-[5px] border-[1px] border-solid border-[#B7B7B7] box-border outline-none pl-[15px] pt-[8px]"/>

      {/* Image  */}
      <h2 className="w-[186px] h-[21px] absolute top-[889px] left-[89px] font-Inter font-[800] text-[16px] leading-[19.36px] text-[#333333]">Image</h2>

      <div className="w-[236px] h-[47px] absolute top-[929px] left-[89px] rounded-[5px] bg-[#F4F4F4] box-border border-[1px] border-solid border-[#D9D9D9]">
        <p className="font-Inter font-[800] text-[18px] text-[#666666] absolute w-[66px] h-[21px] left-[73px] top-[13px] leading-[22px]">Upload</p>
        <div className="w-[18.33px] h-[12.83px] absolute top-[14px] left-[142.83px]">
          <Image src={Vectorimage_upload} alt='' />
        </div>
      </div>


      {/* Level Type  */}
      <h2 className="w-[163px] h-[21px] absolute top-[1017px] left-[89px] font-Inter font-[800] text-[16px] leading-[19.36px] text-[#333333]">Level Type</h2>
      <div className="w-[236px] h-[39px] absolute top-[1057px] left-[89px] rounded-[5px] box-border border-[1px] border-solid border-[#B7B7B7]">
        <p className="w-[71px] h-[21px] absolute top-[9px] left-[21px] font-Inter font-[800] text-[14px] leading-[16.94px] text-[#333333]">Easy</p>
        <div className="w-[12px] h-[8px] absolute top-[5.5px] left-[202px]"><Image src={Caretfilter} alt=''/></div>
      </div>

      {/* Create Challenge Button */}
      <button className="w-[214px] h-[46px] absolute top-[1152px] left-[89px] mb-[670px] rounded-[10px] flex flex-row justify-center items-center py-[6px] px-[18px] gap-[10px] bg-[#44924C] font-Inter font-[600] text-white text-[18px] leading-[21px] ">Create Challenge</button>

      <div className="w-[214px] h-[50px] absolute top-[1200px]"></div>

    </>
  );
}

export default CreateChallenge;
