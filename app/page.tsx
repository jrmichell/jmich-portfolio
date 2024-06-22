import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 py-24">
      <div className="space-y-24 my-10 md:mt-0 w-4/5 xl:w-3/5">
        <div className="my-16">
          <div className="my-24 xl:my-56">
            <Hero />
          </div>
          <div className="my-18 xl:my-56">
            <About />
          </div>
          <div className="my-18 xl:my-56">
            <Projects />
          </div>
        </div>
      </div>
    </main>
  );
}
