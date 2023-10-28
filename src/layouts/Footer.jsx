import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:'#252F3D'}} className='w-full h-[88px] relative top-[250px] text-white flex justify-center items-center'>
        <div className='w-[90%] sm:gap-5 sm:flex-col sm:text-center flex justify-between items-center'>
            <span className='pm:text-[12px]'>Copyright (c) 2023 | Clarifionsupport@clarifion.com</span>
            <img src='/fotter.png' className='w-[231px] sm:w-[172px] sm:h-[12px] h-[16px]'/>
        </div>
    </div>
  )
}

export default Footer