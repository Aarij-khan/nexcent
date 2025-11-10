import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='w-full bg-[#F5F7FA]'>
        <div className="max-w-[1480px] mx-auto">
            <div className='w-[90%] mx-auto h-20 flex items-center justify-between'>
                <Image src="/Logo.png" alt="Logo" width={100} height={50}  className='w-40 h-6 object-cover'/>
                <ul className='text-[16px] font-medium gap-10 items-center md:flex hidden'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Feature</li>
                    <li>Product</li>
                    <li>Testimonial</li>
                    <li>Faqs</li>
                </ul>
                <div className='md:flex hidden items-center gap-6'>
                <button className='text-[#4CAF4F]'>Log in</button>
                <button className='bg-[#4CAF4F] text-white px-5 py-3 rounded-md'>Sign up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
