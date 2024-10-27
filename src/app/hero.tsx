import Image from 'next/image'
import React from 'react'
const Hero = () => {
  return (
    <div>
      
        
      <div className='bg-cover bg-center h-screen' style={{backgroundImage :"url('/kaka11.png')"}}>
      <div className='flex flex-col items-center justify-center'>
        <div className='mt-16  flex flex-col items-center justify-center  gap-4 '>
            <h1 className='font-semibold'>HELLO OEARSI WE WILL HELP</h1><h4 className='text-4xl font-bold text-black'>Grow <span className='text-4xl font-bold text-yellow-500'>Your business</span> </h4>
            <h2 className='uppercase font-bold'>Convert visitors into customers and generate more sales</h2>
           
            <h3 className='font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Reiciendis, rem? Eligendi vel eum ipsam itaque adipisci <br/>ducimus aliquid suscipit eos qui error, doloribus incidunt,<br/> fuga saepe temporibus! Saepe, atque facilis?</h3>
        <h5 className='flex items-center justify-between gap-20 uppercase text-white font-semibold'><button className=' w-28 h-12 rounded-md uppercase bg-blue-800 hover:bg-blue-400 mt-20'>started</button>
        <button className='w-28 h-12 rounded-md uppercase bg-blue-400 hover:bg-blue-800 mt-20'>Contact us</button></h5>
        </div></div>
        </div>
    </div>
  )
}

export default Hero