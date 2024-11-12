import React from 'react'
import Layout from '../../layout'
import Form from '../../components/Form'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <Layout>
      <Form>
        <div className=''>
            <h1 className='text-[#0036B4] text-[24px] md:text-6xl font-bold uppercase text-center'>Đăng nhập</h1>
            <div className='my-[40px]'>
                <h3 className='text-[#0036B4] text-[14px] md:text-3xl font-medium mb-3'>Số điện thoại</h3>
                <input className='w-full h-[40px] rounded-lg px-2' placeholder='Nhập số điện thoại của bạn'></input>
            </div>
            <div className='flex flex-col items-center'>
                <button className='bg-[#0036B4] w-full h-[40px] md:h-[115px] rounded-full'>
                    <Link to={"/otp"}>
                        <h1 className='text-white text-base md:text-[48px] font-normal text-center'>Đăng nhập</h1>
                    </Link>
                </button>
                <h1 className='text-[#0036B4] text-[14px] md:text-3xl font-semibold my-5'>Hoặc</h1>
                <button className='bg-white w-full h-[40px] md:h-[115px] rounded-full'>
                    <h1 className='text-[#0036B4] text-base md:text-[48px] font-normal text-center'>Đăng ký</h1>
                </button>
            </div>
            <h1 className='text-[#0036B4] text-[15px] md:text-3xl font-normal text-center mt-[52px]'>Xem thêm thể lệ chi tiết</h1>
        </div>
      </Form>
    </Layout>
  )
}
