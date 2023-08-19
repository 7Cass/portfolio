'use client';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ChevronDownIcon,
  DownloadIcon,
} from '@radix-ui/react-icons';
import { Typewriter } from 'react-simple-typewriter';

const techs: { name: string }[] = [
  {
    name: 'Angular',
  },
  {
    name: 'Next',
  },
  {
    name: 'Typescript',
  },
  {
    name: 'Express',
  },
  {
    name: 'Node',
  },
  {
    name: 'Aws',
  },
  {
    name: 'Postgres',
  },
];

export default function Home() {
  return (
    <main className="cursor-default relative flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500 dark:from-indigo-700 dark:to-rose-900 to-teal-400">
      {/* Hero */}
      <section className="pb-4 h-screen w-full flex flex-col justify-center items-center text-zinc-950 dark:text-zinc-200">
        <div className="space-y-2 flex-1 flex flex-col justify-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">Eaí,</p>
          <div className="flex items-center justify-center gap-2">
            {/* <span className="text-5xl md:text-7xl lg:text-9xl font-semibold dark:text-zinc-200 text-zinc-950">
              &lt;
            </span> */}
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold rounded p-2 bg-zinc-950 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-950">
              Sou o João!
            </h1>
            {/* <span className="tracking-[-6px] md:tracking-[-10px] lg:tracking-[-18px] text-5xl md:text-7xl lg:text-9xl font-semibold dark:text-zinc-200 text-zinc-950">
              /&gt;
            </span> */}
          </div>
          <h4 className="text-md md:text-2xl lg:text-3xl text-zinc-950 dark:text-zinc-200 font-light">
            <Typewriter
              words={[
                'Desenvolvedor Front-End',
                'Amante de Jogos',
                'Desenvolvedor Back-End',
                'Entusiasta de Novas Tecnologias',
                'UI Designer',
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
          <ChevronDownIcon className="h-8 md:h-12 w-8 md:w-12 animate-bounce" />
          <ChevronDownIcon className="h-8 md:h-12 w-8 md:w-12 animate-bounce animation-delay-100" />
          <ChevronDownIcon className="h-8 md:h-12 w-8 md:w-12 animate-bounce animation-delay-150" />
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

          <div className="w-full flex flex-col gap-8 items-center justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-5xl">
              Algumas tecnologias que domino
            </h2>

            {/* todo: Fazer 2+ sliders na vertical */}
            <div className="relative w-full md:max-w-5xl h-12 overflow-x-hidden">
              <div
                style={{
                  left: '0%',
                  top: '0%',
                  width: 'inherit',
                  height: 'inherit',
                }}
                className="absolute w-full flex items-center justify-around animate-primary text-zinc-200">
                {techs &&
                  techs.map((tech, index) => (
                    <div
                      key={index}
                      className="py-1 px-2 text-center rounded text-md md:text-xl lg:text-2xl xl:text-3xl dark:text-zinc-950 text-zinc-200 dark:bg-zinc-200 bg-zinc-950">
                      {tech.name}
                    </div>
                  ))}
              </div>
              <div
                style={{
                  left: '0%',
                  top: '0%',
                  width: 'inherit',
                  height: 'inherit',
                }}
                className="absolute w-full flex items-center justify-around animate-secondary text-zinc-200">
                {techs &&
                  techs.map((tech, index) => (
                    <div
                      key={index}
                      className="px-2 py-1 rounded text-md md:text-xl lg:text-2xl xl:text-3xl dark:text-zinc-950 text-zinc-200 dark:bg-zinc-200 bg-zinc-950">
                      {tech.name}
                    </div>
                  ))}
              </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-8 mt-12">
              <h2 className="text-2xl md:text-4xl">
                Estou disponível para novos Projetos
              </h2>
              <a
                href="./cv_fullstack.pdf"
                target="_blank"
                className="max-w-xs text-center text-2xl p-2 rounded cursor-pointer bg-zinc-950 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-950">
                Baixe meu CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="h-24 w-full">
        <div className="h-full px-20 flex items-center gap-4 text-zinc-950 dark:text-zinc-200">
          <p className="text-2xl md:text-3xl">Feito por João Pedro</p>
          <p className="text-2xl md:text-3xl">🚀</p>
        </div>
      </footer>

      {/* Floating Icons */}
      <section className="z-50 m-8 flex gap-4 fixed right-0 bottom-0 text-zinc-950 dark:text-zinc-200">
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
