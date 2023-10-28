import React from 'react'
import 'tailwindcss/tailwind.css';

const MainPage = () => {
  return (
    <div className=' w-full h-full flex items-center justify-center relative top-[50px]'>
        <div className='w-[90%] sm:w-[320px] h-full flex items-center justify-center flex-col'>

            <div className='w-full flex items-center justify-between'>
                <img className='w-[192px] sm:w-[106px]' src='/clarifion.png' />
                <img className='w-[192px] sm:w-[106px]' src='/emp.png' />
            </div>
            <div className='w-[636px] h-[76px] sm:w-[320px] sm:mt-10 sm:h-[104px] text-center font-Manrope'>
              <h1 className='text-[48px] sm:text-[32px]'>Wait ! Your Order In Progress.</h1>
              <h3 className='text-[24px] text-[16px] text-[#4D5254]'>Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing </h3>
            </div>
            <div className='w-full flex items-center justify-between relative top-[80px]'>
              <div className='flex gap-5 items-center sm:flex-col'>
                <img className='w-[40px] h-[40px] sm:w-[20px] sm:h-[20px]' src='done.png'/>
                <h1 className='text-[20px] sm:text-[12px]'>Cart Review</h1>
              </div>
              <div className='flex gap-5 items-center sm:flex-col'>
                <img className='w-[40px] h-[40px] sm:w-[20px] sm:h-[20px]' src='done.png'/>
                <h1 className='text-[20px] sm:text-[12px]'>Checkout</h1>
              </div>
              <div className='flex gap-5 items-center sm:flex-col'>
                <img className='w-[40px] h-[40px] sm:w-[20px] sm:h-[20px]'src='3.png'/>
                <h1 className='text-[20px] sm:text-[12px]'>Special Offer</h1>
              </div>
              <div className='flex gap-5 items-center sm:flex-col'>
                <img className='w-[40px] h-[40px] sm:w-[20px] sm:h-[20px]'src='4.png'/>
                <h1 className='text-[20px] sm:text-[12px]'>Confirmation</h1>
              </div>
            </div>

            <div style={{borderRadius:'10px',backgroundColor:'#FAFAFA'}} className='w-full p-10 sm:p-0 flex items-center justify-center bg-rounded relative top-[130px]'>
              <div className='flex justify-between gap-10 w-full sm:flex-col-reverse'>
                <div className='h-full flex flex-col justify-between gap-10'>
                  <img className='w-[575px] h-[591px] sm:w-[95%] sm:h-[381px]'  src='/image 4.png'/>
                  <div style={{borderRadius:'10px',backgroundColor:'white'}}  className='p-[24px] w-[575px] h-[186px] sm:hidden'>
                    <img className='w-[237px] h-[48px]' src='/ava.png' />
                    <p className='text-[16px]'>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
                  </div>
                </div>
                
                <img className='w-[550px] h-[799px] sm:w-[95%] sm:h-[541px]' src='/Frame 14.png'/>
              </div>
            </div>

        </div>
    </div>
  )
}

export default MainPage