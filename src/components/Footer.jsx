import React from 'react'
import image from "../assets/Acelinklogo.png";

const Footer = () => {
  return (
    <footer className='grid grid-cols-2 bg-footer-linear-gradient gap-y-12 gap-x-8 p-16 md:grid-cols-4 xl:grid-cols-4 '>
        <div className='col-span-full xl:col-span-1 md:col-span-1 '>
            <img src={image} alt="company_logo" className='xl:h-[170px]'/>
        </div>
        <div className='flex flex-col gap-2 text-white'>
            <h3 className='font-bold text-2xl'>Follow Us</h3>
            <div>
                <a href="#" className='opacity-60 hover:opacity-100'>Twitter</a>
            </div>
            <div>
                <a href="#" className='opacity-60 hover:opacity-100'>Instagram</a>
            </div>
            <div>
                <a href="#" className='opacity-60 hover:opacity-100'>Github</a>
            </div>
        </div>

        <div className='flex flex-col gap-2 text-white'>
            <h3 className='font-bold text-2xl'>Privacy Policy</h3>
            <div>
                <a href="#" className='opacity-60 hover:opacity-100'>Terms of service </a>
            </div>
            <div>
                <a href="#" className='opacity-60 hover:opacity-100'>Policy</a>
            </div>
            <div>
                <a href="#" className='opacity-60 hover:opacity-100'></a>
            </div>
        </div>

        <div className='flex flex-col gap-2 text-white cursor-pointer '>
            <h3 className='font-bold text-2xl '>Contact Us</h3>
            <div>
                <a href="#" className='opacity-60 hover:opacity-100 text-lg'>Email</a>
            </div>
            <div>
                <a href="#" className='opacity-60 hover:opacity-100 text-lg'>Phone</a>
            </div>
        </div>

    </footer>
  )
}

export default Footer