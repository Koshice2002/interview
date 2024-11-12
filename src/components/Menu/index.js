import React from 'react'
import logo from '../../share/logo.png'
import home from '../../share/home.svg'
import logoutIcon from '../../share/logOut.svg'

export default function Menu() {
  return (
    <div className='w-full h-[174px]'>
        <div className='px-[35px] pt-[27px]'>
            <div className='hidden md:block'>
                <div className='flex items-center'>
                    <div className='w-[181px] h-[60px] cursor-pointer'>
                        <img src={logo} alt="logo" className='w-full h-full'></img>
                    </div>
                    <div className='hidden md:grid grid-cols-5 gap-[30px] mx-[60px] text-center uppercase cursor-pointer'>
                        <div className='text-base font-normal text-[#707172]'>
                            Cộng đồng sóng xanh
                        </div>
                        <div className='text-base font-normal text-[#707172]'>
                            Bản đồ xanh
                        </div>
                        <div className='text-base font-normal text-[#707172]'>
                            Tài khoản của tôi
                        </div>
                        <div className='text-base font-normal text-[#707172]'>
                            Bảng xếp hạng
                        </div>
                        <div className='text-base font-normal text-[#707172]'>
                            Điều khoản và thể lệ
                        </div>
                    </div>
                    <div className='hidden md:flex w-[45px] h-[45px] cursor-pointer'>
                        <img src={logoutIcon} alt="logo" className='w-full h-full'></img>
                    </div>
                </div>
                <div className='flex justify-end mt-[22px]'>
                    <div className='flex flex-row h-[50px] w-[603px] rounded-[36px] border-2 bg-gray-100'>
                        <div className='flex justify-center items-center w-[242px] h-full text-2xl font-semibold text-white bg-[#0036B4] rounded-[36px] px-[18px] cursor-pointer'>
                            Phân tích A.I
                        </div>
                        <div className='flex justify-center items-center w-[361px] h-full text-lg font-semibold text-[#0036B4] bg-gray-100 rounded-[36px] px-2 cursor-pointer'>
                            Khám phá phong cách thuần khiết
                        </div>
                    </div>
                </div>
            </div>
            <div className='block md:hidden'>
                <div className='grid grid-cols-2 items-center'>
                    <div className='flex flex-col w-full h-full cursor-pointer'>
                        <div className='w-[28px] h-[28px] mt-[10px] mb-[25px]'>
                            <img src={home} alt='home' className='w-full h-full'/>
                        </div>
                        <div className='w-[120px] h-[40px]'>
                            <img src={logo} alt="logo" className='w-full h-full'></img>
                        </div>
                    </div>

                    <div className='flex flex-col items-center w-full h-full'>
                        <div className='flex justify-center items-center w-full h-[35px] text-xl font-semibold text-white bg-[#0036B4] rounded-[36px] cursor-pointer p-3'>
                            Phân tích A.I
                        </div>
                        <div className='flex justify-center items-center w-full h-full text-center text-base font-semibold text-[#0036B4] px-2 cursor-pointer mt-[10px]'>
                            Khám phá phong cách thuần khiết
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}
