import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Resume from "@/components/resume";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 py-24">
      <div className="space-y-24 my-10 md:mt-0 w-4/5 md:w-3/5">
        <div className="my-20">
          <Hero />
        </div>
        <div className="my-20">
          <About />
        </div>
        <div className="my-20">
          <Resume />
        </div>
        <div className="my-20">
          <Projects />
        </div>
      </div>
    </main>
  );
}
