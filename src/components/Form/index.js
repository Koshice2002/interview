import React from 'react'
import thuanKhiet from '../../share/thuần khiết (desk).png'
import image from '../../share/image.png'

export default function Form({children}) {
  return (
    <div className=' w-full h-full bg-[#DBE2EC]'>
        <div className='pt-[40px] flex flex-col items-center'>
            <h1 className='text-[#0036B4] text-[24px] md:text-6xl font-bold uppercase'>Khám phá phong cách</h1>
            <img src={thuanKhiet} alt='thuanKhiet' className='w-[300px] md:w-[500px] h-[46px] md:h-[150px] my-2'></img>
            <h1 className='text-[#0036B4] text-[14px] md:text-3xl font-bold uppercase'>Cùng Aquafina A.I</h1>
            <h1 className='text-[#0036B4] text-[14px] md:text-3xl mt-[30px]'>Nhận <span className='font-bold'>thông điệp tỏa sáng</span> mỗi ngày</h1>
            <img src={image} alt='image1' className='w-[600px] h-[300px]'></img>
            <h1 className='text-[#0036B4] text-[14px] md:text-3xl '>Tổng giá trị quà tặng hơn <span className='font-bold'>200 triệu đồng</span></h1>
        </div>
        <div className='flex justify-center mt-[30px]'>
          <div className='w-[350px] md:w-[600px]'>
            {children}
          </div>
        </div>
    </div>
  )
}
