import Image from "next/image"


function Footer() {
  return (
    <div className="w-3/4 flex m-auto justify-between text-gray-600 mb-20">
        <div className="text-left">
            <Image 
            className="mb-3"
            src="/earth.svg" 
            alt="leaves" 
            width={50} 
            height={250} 
            />
            <h2
            className="mb-12"
            >Earth-friendly food delivery, right <br /> at your door.</h2>
            <p>© GreenGrub - All rights reserved.</p>
        </div>
        <div className="flex mt-32">
            <Image 
            src="/ig.svg" 
            alt="leaves" 
            width={50} 
            height={250} 
            />
            <Image 
            src="/yt.svg" 
            alt="leaves" 
            width={50} 
            height={250} 
            />
        </div>
    </div>
  )
}

export default Footer