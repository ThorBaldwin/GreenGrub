import Image from "next/image"


function Ratings() {
  return (
<div className='flex items-center justify-center tracking-tight gap-16 mb-32 max-lg:flex-col'>
<div className=" rounded-xl bg-white p-10 shadow-lg">
  <div className="mb-4 text-[18px] font-normal text-gray-600 text-center">
  "This eco-friendly food delivery service made the entire process seamless. Their team was knowledgeable, 
  communicated effectively, and the quality of the food was exceptional. Definitely worth supporting!"
  </div>
  <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div className="flex items-center gap-4">
      <Image
        src="/tree.svg"
        alt="Alice"
        width={48}
        height={48}
        className="size-12 rounded-full object-cover"
      />
      <div className="text-left">
        <div className="text-xl text-neutral-900 font-semibold">James S.</div>
        <div className="text-gray-700 text-md">Customer</div>
      </div>
    </div>
    <div className="text-3xl tracking-widest text-green-500">★★★★★</div>
  </div>
</div>
<div className=" rounded-xl bg-white p-10 shadow-lg">
  <div className="mb-4 text-[18px] font-normal text-gray-600 text-center">
  "Ordering from this sustainable food delivery company was a breeze. The team was professional, provided clear updates,
   and the food arrived fresh and delicious. 
  Their commitment to the environment makes them stand out. Highly recommended!"
  </div>
  <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div className="flex items-center gap-4">
      <Image
        src="/tree.svg"
        alt="Alice"
        width={48}
        height={48}
        className="size-12 rounded-full object-cover"
      />
      <div className="text-left">
        <div className="text-xl text-neutral-900 font-semibold">Elizabeth K.</div>
        <div className="text-gray-700 text-md">Customer</div>
      </div>
    </div>
    <div className="text-3xl tracking-widest text-green-500">★★★★★</div>
  </div>
</div>
</div>
  )
}

export default Ratings