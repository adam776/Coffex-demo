import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-3xl text-center flex flex-col items-center gap-8">
        
        {/* Coffex Inc. Crown Logo */}
        <div className="relative w-72 h-48 mb-4">
          <Image 
            src="/coffex-logo.jpg" 
            alt="Coffex Inc. Logo" 
            fill
            className="object-contain"
            priority
          />
        </div>

        <h2 className="text-5xl font-extrabold tracking-tight text-coffex-brown sm:text-6xl">
          Premium Coffee, <br />
          <span className="text-coffex-gold">Fit for Royalty.</span>
        </h2>
        
        <p className="mt-4 text-lg text-coffex-brown/80 max-w-xl">
          Join the Coffex Inc. subscription and get freshly roasted beans delivered directly to your door every month.
        </p>

        <div className="flex gap-4 mt-8">
          <Link 
            href="/subscribe" 
            className="rounded-md bg-coffex-gold px-6 py-3 text-white font-semibold shadow-sm hover:bg-coffex-gold/90 transition-colors"
          >
            Start Subscription
          </Link>
          <Link 
            href="/about" 
            className="rounded-md border-2 border-coffex-brown px-6 py-3 text-coffex-brown font-semibold hover:bg-coffex-brown hover:text-coffex-cream transition-colors"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}