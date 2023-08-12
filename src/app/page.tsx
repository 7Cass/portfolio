'use client';
import { GitHubLogoIcon, LinkedInLogoIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-400">

      <section className="h-screen flex flex-col justify-center items-center text-zinc-950">
        <div className="">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold pl-0.5 lg:pl-1.5">Eaí,</p>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">Sou o João!</h1>
          <h4 className="text-md md:text-xl lg:text-2xl text-zinc-700 pl-0.5 lg:pl-1.5">
            <Typewriter 
              words={['Desenvolvedor Front-End', 'Amante de Jogos', 'Desenvolvedor Back-End', 'Entusiasta de Novas Tecnologias', 'UI Designer']}
              loop={false}
              cursor
              cursorStyle='_'
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h4>
        </div>
        <div  className="absolute bottom-10">
          <ChevronDownIcon className="h-8 md:h-12 w-8 md:w-12 text-zinc-950 animate-bounce" />
        </div>
      </section>

      <section className="m-4 flex gap-4 absolute right-0 bottom-0">
      <a href="https://github.com/7cass" target="_blank" rel="noopener noreferrer">
          <LinkedInLogoIcon className="h-8 md:h-12 w-8 md:w-12 drop-shadow-md" />
        </a>
        <a href="https://github.com/7cass" target="_blank" rel="noopener noreferrer">
          <GitHubLogoIcon className="h-8 md:h-12 w-8 md:w-12 drop-shadow-md" />
        </a>
      </section>
    </main>
  )
}
