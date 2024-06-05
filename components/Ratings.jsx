import Image from "next/image"


function Ratings() {
  return (
<div className='flex items-center justify-center tracking-tight gap-16 mb-32 max-lg:flex-col'>
<div className=" rounded-xl bg-white p-10 shadow-lg">
  <div className="mb-4 text-[18px] font-normal text-gray-600 text-center">
    "This company made the whole process so smooth. Their team was skilled,
    communicated clearly, and the final product was top-notch. Definitely
    worth working with."
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
        <div className="text-xl text-neutral-900 font-semibold">Alice</div>
        <div className="text-gray-700 text-md">Customer</div>
      </div>
    </div>
    <div className="text-3xl tracking-widest text-green-500">★★★★★</div>
  </div>
</div>
<div className=" rounded-xl bg-white p-10 shadow-lg">
  <div className="mb-4 text-[18px] font-normal text-gray-600 text-center">
    "This company made the whole process so smooth. Their team was skilled,
    communicated clearly, and the final product was top-notch. Definitely
    worth working with."
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
        <div className="text-xl text-neutral-900 font-semibold">Alice</div>
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