import Image from 'next/image'


function Mission() {
  return (
    <div className='grid grid-cols-2 items-center tracking-tight gap-4 mb-40 max-lg:flex flex-col max-sm:mb-20'>
        <div className='ml-4 max-sm:ml-0 max-sm:mb-10'>
            <h1 className='font-black text-[52px] text-neutral-900 mb-6 max-sm:text-4xl'>We Help Recycle</h1>
            <p className='font-normal text-gray-600 text-xl leading-normal'>Our commitment to recycling helps reduce waste and protect the environment. 
                By choosing us, you're supporting a greener planet. We use eco-friendly packaging materials, 
                ensuring that every delivery minimizes its environmental footprint.
                Together, we can make a significant impact by promoting sustainable 
                practices and preserving natural resources for future generations.</p>
        </div>
        <div className='flex justify-center'>
            <Image
            src="/recycle.svg"
             alt="recycle" 
             width={350} 
             height={150} 
             />
        </div>
    </div>
  )
}

export default Mission