import { Button } from "/components/ui/button"
import Image from "next/image";
import About from "/components/About";
import Mission from "/components/Mission";
import Ratings from "/components/Ratings";
import Faqs from "/components/Faqs";
import Link from "next/link";


export default function Home() {
  return (
    <main className="w-3/4 m-auto">
      <div className="flex flex-col justify-center tracking-tight leading-tight items-center gap-6 mt-32 mb-44">
        <Image 
        className="absolute left-12 top-80 rotate-12 -z-20 max-md:-left-24 max-md:w-1/2"
        src="leaves.svg"
        width={250}
        height={250}
        alt="/"
        />
        <Image 
        className="absolute rotate-[-45deg] right-32 top-32 -z-20 max-md:right-0 max-md:top-28 max-md:w-1/6"
        src="leaves.svg"
        width={150}
        height={250}
        alt="/"
        />
        <div className="font-black text-[64px] text-neutral-900">
          <h1>GreenGrub: Eco-Friendly Food <br /> <span className="animate-text bg-gradient-to-r from-lime-400 via-green-600 to-lime-400 bg-clip-text text-transparent">Delivered Fast!</span> </h1>
        </div>
        <div className="text-gray-600 text-xl">
          <p>Our electric vehicles ensure your meals arrive fresh, fast, and with a minimal carbon footprint. </p>
        </div>
        <div className="flex mt-3 gap-8">
          <Link href={"/profile"}>
          <Button 
          href="/profile"
          className="text-[19px]"
          variant="default"
          size="lg"
          >
            Sign up
          </Button>
          </Link>
          <Link href={"/about"}>
          <Button 
          className="text-[19px]"
          variant="outline"
          size="lg"
          >
            Find out
          </Button>
          </Link>
        </div>
      </div>

      <About />
      <Mission />
      <Ratings />
      <Faqs />

    </main>

  );
}
