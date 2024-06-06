import Image from 'next/image'
import { Button } from "/components/ui/button"
import Link from 'next/link'



export default function About() {
  return (
    <div className="tracking-tight mb-44 max-sm:mb-28">
      <div className="font-black text-[52px] text-neutral-900">
        <h1 className="mb-3 max-sm:text-4xl">Easy as 1, 2, 3.</h1>
        <p className="font-normal text-gray-600 text-xl">Sustainable food delivery, right to your door.</p>
      </div>
      <div className="grid grid-cols-3 mt-20 gap-28 max-lg:flex flex-col">
        <div className='flex flex-col items-center gap-3'>
          <Image 
          src="/city.svg" 
          alt="logo" 
          width={200} 
          height={50} 
          />
          <h1 className='font-bold text-4xl text-neutral-900'>Order Your Food</h1>
          <p className='font-normal text-gray-600 text-xl'>Choose from our eco-friendly menu with a few simple clicks.</p>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Image 
          src="/bike.svg" 
          alt="logo" 
          width={200} 
          height={150} 
          />
          <h1 className='font-bold text-4xl text-neutral-900'>Receive Your Delivery</h1>
          <p className='font-normal text-gray-600 text-xl'>Enjoy fast, reliable delivery with minimal environmental impact.</p>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Image 
          src="/can.svg" 
          alt="logo" 
          width={200} 
          height={150} 
          />
          <h1 className='font-bold text-4xl text-neutral-900'>Dispose Responsibly</h1>
          <p className='font-normal text-gray-600 text-xl'>Use our recyclable packaging to reduce waste and protect the planet.</p>
        </div>
      </div>
    </div>
  )
}

