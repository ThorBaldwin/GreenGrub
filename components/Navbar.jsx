import Link from 'next/link';
import Image from 'next/image';
import { Button } from "/components/ui/button"

export default function Navbar() {
  return (
    <div className='w-3/4 m-auto bg-transparent h-20 flex justify-between items-center'>
        <div>
            <Link href="/">
                <Image 
                src="/earth.svg"
                alt="logo"
                width={50}
                height={150}
                />
            </Link>
        </div>
        <div>
            <Link 
            href={"/profile"}
            >
                <Button 
                size="sm"
                variant="outline"
                >Log in</Button>
            </Link>
        </div>
    </div>
  )
}

