import { Hero } from '@/components/Hero'
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* Other components */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}