import { Button } from "/components/ui/button"
import Image from "next/image";
import About from "/components/About";
import Mission from "/components/Mission";
import Ratings from "/components/Ratings";
import Faqs from "/components/Faqs";
import Link from "next/link";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";


export default function Home() {
  return (
    <main className="w-3/4 m-auto">
              <Navbar />

      <div className="flex flex-col justify-center tracking-tight leading-tight items-center gap-6 mt-20 mb-44">
        <Image src="/bg.png" width={300} height={300} alt="/" className="absolute w-full h-full top-0 left-0 object-cover -z-40" />
        <Image 
        className="absolute left-12 top-80 rotate-12 -z-20 max-lg:-left-16 max-lg:w-1/4"
        src="leaves.svg"
        width={250}
        height={250}
        alt="/"
        />
        <Image 
        className="absolute rotate-[-45deg] right-32 top-32 -z-20 max-lg:right-5 max-lg:top-28 max-lg:w-1/6"
        src="leaves.svg"
        width={150}
        height={250}
        alt="/"
        />
        <div className="font-black text-8xl text-neutral-900 max-lg:text-5xl">
          <h1>GreenGrub: Eco-Friendly Food <br /> <span className="animate-text bg-gradient-to-r from-lime-400 via-green-600 to-lime-400 bg-clip-text text-transparent">Delivered Fast!</span> </h1>
        </div>
        <div className="text-gray-600 text-xl">
          <p>Our electric vehicles ensure your meals arrive fresh, fast, and with a minimal carbon footprint. </p>
        </div>
        <div className="flex mt-3 gap-8 max-sm:gap-4">
          <Link href={"/profile"}>
          <Button 
          href="/profile"
          className="text-lg max-sm:text-[16px]"
          variant="default"
          size="lg"
          >
            Join waitlist
          </Button>
          </Link>
        </div>
      </div>

      <About />
      <Mission />
      <Ratings />
      <Faqs />
      <Footer />

    </main>

  );
}
