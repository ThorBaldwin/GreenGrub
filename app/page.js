import { Button } from "/components/ui/button"



export default function Home() {
  return (
    <main className="w-3/4 m-auto">
      <div className="flex flex-col justify-center tracking-tight leading-tight items-center gap-6 my-24">
        <div className="font-bold text-[52px] text-neutral-100">
          <h1>GreenGrub: Eco-Friendly Food <br /> Delivered Fast!</h1>
        </div>
        <div className="text-neutral-300 text-xl">
          <p>Our electric vehicles ensure your meals arrive fresh, fast, and with a minimal carbon footprint. </p>
        </div>
        <div className="flex gap-4">
          <Button 
          variant="outline"
          size="lg"
          >
            Sign up
          </Button>
          <Button 
          variant="secondary"
          size="lg"
          >
            Sign up
          </Button>
        </div>
      </div>

    </main>
  );
}
