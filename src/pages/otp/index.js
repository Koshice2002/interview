import React, { useEffect, useState } from 'react'
import Layout from '../../layout'
import Form from '../../components/Form'

export default function OTP() {
    const [seconds, setSeconds] = useState(30);
    const [showResend, setShowResend] = useState(false);

    useEffect(() => {
        if (seconds > 0) {
        const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
        return () => clearTimeout(timerId); 
        } else {
        setShowResend(true);
        }
    }, [seconds]);

  return (
    <Layout>
      <Form>
        <div className=''>
            <h1 className='text-[#0036B4] text-[24px] md:text-6xl font-bold uppercase text-center'>Nhập OTP</h1>
            <div className='my-[24px] md:my-[40px]'>
                <h1 className='text-[#0036B4] text-[14px] md:text-3xl text-center'>Một mã OTP vừa được gửi vào số <span className='font-bold'>0915646474</span></h1>
            </div>
            <div className='flex justify-center gap-8 mb-[40px]'>
                <input className='w-[45px] md:w-[74px] h-[45px] md:h-[74px] rounded-lg text-center text-lg md:text-2xl'></input>
                <input className='w-[45px] md:w-[74px] h-[45px] md:h-[74px] rounded-lg text-center text-lg md:text-2xl'></input>
                <input className='w-[45px] md:w-[74px] h-[45px] md:h-[74px] rounded-lg text-center text-lg md:text-2xl'></input>
                <input className='w-[45px] md:w-[74px] h-[45px] md:h-[74px] rounded-lg text-center text-lg md:text-2xl'></input>
            </div>
            <div className='flex flex-col items-center'>
                <button className='bg-[#0036B4] w-full h-[40px] md:h-[115px] rounded-full'>
                    <h1 className='text-white text-base md:text-[48px] font-normal text-center'>Xác nhận</h1>
                </button>
                 <div className='my-5'>
                    <h1 className='text-[#0036B4] text-[14px] md:text-3xl font-semibold text-center'>
                        Mã sẽ được gửi trong vòng <span className='font-bold'>{seconds} GIÂY</span>
                    </h1>
                    {showResend && (
                        <h1 className='text-blue-400 text-[14px] md:text-3xl font-semibold text-center mt-4'>
                        Gửi lại mã
                        </h1>
                    )}
                </div>
            </div>
        </div>
      </Form>
    </Layout>
  )
}
