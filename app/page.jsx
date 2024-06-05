import { Button } from "/components/ui/button"
import Image from "next/image";
import About from "/components/About";
import Mission from "/components/Mission";
import Ratings from "@/components/Ratings";
import Faqs from "@/components/Faqs";


export default function Home() {
  return (
    <main className="w-3/4 m-auto">
      <div className="flex flex-col  justify-center tracking-tight leading-tight items-center gap-6 mt-24 mb-60">
        <Image 
        className="absolute left-24 top-80 rotate-12 -z-20"
        src="leaves.svg"
        width={250}
        height={250}
        alt="/"
        />
        <Image 
        className="absolute rotate-[-45deg] right-48 top-32 -z-20"
        src="leaves.svg"
        width={150}
        height={250}
        alt="/"
        />
        <div className="font-bold text-[52px] text-neutral-900">
          <h1>GreenGrub: Eco-Friendly Food <br /> Delivered Fast!</h1>
        </div>
        <div className="text-gray-600 text-xl">
          <p>Our electric vehicles ensure your meals arrive fresh, fast, and with a minimal carbon footprint. </p>
        </div>
        <div className="flex gap-8">
          <Button 
          className="text-[16px]"
          variant="default"
          size="lg"
          >
            Sign up
          </Button>
          <Button 
          className="text-[16px]"
          variant="outline"
          size="lg"
          >
            Find out
          </Button>
        </div>
      </div>

      <About />
      <Mission />
      <Ratings />
      <Faqs />

    </main>

  );
}
