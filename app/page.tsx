import About from "@/components/about";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 py-24">
      <div className="space-y-16 my-10 md:mt-0 w-4/5 md:w-3/5">
        <div>
          <Hero />
        </div>
        <div>
          <About />
        </div>
      </div>
    </main>
  );
}
