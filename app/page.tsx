import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import DotPattern from "@/components/magicui/dot-pattern";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 py-24">
      <div className="space-y-24 my-10 md:mt-0 w-3/4 xl:w-3/5">
        <div className="my-16">
          <div className="my-20 xl:my-36">
            <Hero />
          </div>
          <div className="my-20 xl:my-36">
            <About />
          </div>
          <div className="my-20 xl:my-36">
            <Projects />
          </div>
          <div className="mt-20 xl:mt-36">
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
