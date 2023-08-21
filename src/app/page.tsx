'use client';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ChevronDownIcon,
  DownloadIcon,
  ArrowUpIcon,
} from '@radix-ui/react-icons';
import { Typewriter } from 'react-simple-typewriter';

const date = new Date();

export default function Home() {
  return (
    <main className="cursor-default relative flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500 dark:from-indigo-700 dark:to-rose-900 to-teal-400">
      {/* Hero */}
      <section
        id="hero"
        className="pb-4 h-screen w-full flex flex-col justify-center items-center text-zinc-950 dark:text-zinc-200">
        <div className="space-y-2 flex-1 flex flex-col justify-center">
          <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">Eaí,</p>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold rounded p-2 bg-zinc-950 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-950">
              Sou o João!
            </h1>
          </div>
          <h4 className="max-w-[300px] text-lg md:text-3xl lg:text-4xl text-zinc-950 dark:text-zinc-200 font-light">
            <Typewriter
              words={[
                'Desenvolvedor Front-End',
                'Amante de Jogos',
                'Desenvolvedor Back-End',
                'Entusiasta de Novas Tecnologias',
                'UI & UX Designer',
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h4>
        </div>

        <a
          href="#about"
          className="cursor-pointer -space-y-5 text-zinc-950 dark:text-zinc-200 opacity-60">
          <ChevronDownIcon className="h-12 md:h-12 w-12 md:w-12 animate-bounce" />
          <ChevronDownIcon className="h-12 md:h-12 w-12 md:w-12 animate-bounce animation-delay-100" />
          <ChevronDownIcon className="h-12 md:h-12 w-12 md:w-12 animate-bounce animation-delay-150" />
        </a>
      </section>

      <section
        id="about"
        className="w-full dark:bg-zinc-950 bg-zinc-200">
        <div className="h-screen flex flex-col justify-center items-center gap-32 md:gap-64 dark:text-zinc-200 text-zinc-950 mx-8">
          <h2 className="inline-block text-4xl md:text-5xl lg:text-7xl w-full md:max-w-5xl">
            Desenvolvedor{' '}
            <span className="px-2 rounded dark:bg-zinc-200 dark:text-zinc-950 bg-zinc-950 text-zinc-200">
              Fullstack
            </span>{' '}
            com conhecimentos sólidos em diversas áreas.
          </h2>

          <div className="w-full flex flex-col items-center justify-center gap-20">
            <h3 className="text-3xl md:text-4xl lg:text-6xl">
              Estou disponível para{' '}
              <span className="px-2 rounded dark:bg-zinc-200 dark:text-zinc-950 bg-zinc-950 text-zinc-200">
                novos Projetos
              </span>
              !
            </h3>
            <a
              href="./cv_fullstack.pdf"
              target="_blank"
              className="w-full md:max-w-md text-center text-2xl p-2 rounded cursor-pointer bg-zinc-950 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-950">
              Baixe meu CV
            </a>
          </div>
        </div>
      </section>

      <footer className="h-24 w-full">
        <div className="h-full px-20 flex items-center justify-center gap-4 text-zinc-950 dark:text-zinc-200">
          <small>
            &copy; Copyright {date.getFullYear()}, JP Dev{' '}
            <span className="ml-1">🚀</span>
          </small>
        </div>
      </footer>

      {/* Floating Icons */}
      <section className="z-50 m-6 flex gap-4 fixed right-0 bottom-0 text-zinc-950 dark:text-zinc-200">
        <a
          href="https://github.com/7cass"
          target="_blank"
          rel="noopener noreferrer">
          <LinkedInLogoIcon className="h-8 md:h-12 w-8 md:w-12 drop-shadow-md" />
        </a>
        <a
          href="https://github.com/7cass"
          target="_blank"
          rel="noopener noreferrer">
          <GitHubLogoIcon className="h-8 md:h-12 w-8 md:w-12 drop-shadow-md" />
        </a>
      </section>
    </main>
  );
}
