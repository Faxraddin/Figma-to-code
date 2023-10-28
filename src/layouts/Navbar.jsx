import React from 'react'

const Navbar = () => {
  return (
    <div style={{background: '#252F3D'}} className='w-full h-[50px] flex justify-center items-center'>
        <div className='w-[90%] flex justify-between pm:justify-center'>
            
            <div className='flex w-1/4 sm:w-[95%] gap-5  justify-center items-center text-white'>
              <img src='/fluent.png'/>
              <h1 className='text-[12px]'>30-DAY SATISFACTION GUARANTEE</h1>
            </div>
            <div className='flex w-1/4 gap-5 sm:hidden justify-center items-center text-white'>
              <img src='/ph.png'/>
              <h1 className='text-[12px]'>FREE DELIVERY ON ORDERS OVER $40.00</h1>
            </div>
            <div className='flex w-1/4 gap-5 sm:hidden justify-center items-center text-white'>
              <img src='/mdi.png'/>
              <h1 className='text-[12px]'>50.000+ HAPPY CUSTOMERS</h1>
            </div>
            <div className='flex w-1/4 gap-5 sm:hidden justify-center items-center text-white'>
              <img src='/Vector.png'/>
              <h1 className='text-[12px]'>100% MONEY BACK GUARANTEE</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar