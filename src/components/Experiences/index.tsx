import { ChevronUp } from 'lucide-react';

export default function Experiences() {
  return (
    <section id='experiences' className='my-52'>
      <div className='max-w-[1140px] mx-auto'>
        <div className='w-full'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-zinc-200 text-8xl font-medium'>
              <span className='text-violet-500 pr-4'>cd </span><span className='text-violet-500 -mr-2'>~/</span>jobs<span className='text-violet-500 -mr-2'>/</span>xp
            </h1>
            <h3 className='text-violet-500 text-5xl font-light leading-[160%]'>Por onde passei...</h3>
          </div>
          <div className='py-28'>
            <ol className='flex flex-col gap-10 relative border-l-4 border-zinc-200'>
              <ChevronUp size={48} strokeWidth={2} absoluteStrokeWidth={false} className='absolute text-violet-500 -mt-[1.8%] -left-[2.6rem]' />
              <li className='ml-12 max-w-[768px] border border-transparent hover:shadow-sm hover:border-zinc-600 hover:bg-zinc-950 transition-all delay-75 rounded-sm px-4 py-2'>
                <div className='absolute w-8 h-8 bg-violet-500 rounded-full mt-[5.9rem] -left-[1.2rem] shadow-md'></div>
                <time className='text-xl font-light text-zinc-400'>Dezembro 2021 - Atualmente</time>
                <h4 className='text-2xl font-light text-zinc-200'>CIPA - Participações e Administração S/A</h4>
                <h3 className='text-5xl my-4 font-medium text-violet-500'>Full Stack Developer Junior</h3>
                <p className='text-2xl text-zinc-400'>Manutenção de código legado, criação e integração de projetos no ecosistema da empresa utilizando as seguintes tecnologias:</p>
                <ul className='text-zinc-400 text-2xl'>
                  <li>• Typescript</li>
                  <li>• Angular</li>
                  <li>• NestJs</li>
                  <li>• PostgreSQL</li>
                  <li>• AWS</li>
                </ul>
              </li>
              <li className='ml-12 max-w-[768px] border border-transparent hover:shadow-sm hover:border-zinc-600 hover:bg-zinc-950 transition-all delay-75 rounded-sm px-4 py-2'>
                <div className='absolute w-8 h-8 bg-violet-500 rounded-full mt-[5.9rem] -left-[1.2rem] shadow-md'></div>
                <time className='text-xl font-light text-zinc-400'>Janeiro 2021 - Setembro 2021</time>
                <h4 className='text-2xl font-light text-zinc-200'>Kenzie Academy Brasil</h4>
                <h3 className='text-5xl my-4 font-medium text-violet-500'>Peer Coach</h3>
                <p className='text-2xl text-zinc-400'>Acompanhamento, suporte e revisão de código e de projetos com alunos nas tecnologias:</p>
                <ul className='text-zinc-400 text-2xl'>
                  <li>• JavaScript</li>
                  <li>• React</li>
                  <li>• Python</li>
                  <li>• Flask</li>
                  <li>• Git</li>
                  <li>• PostgreSQL</li>
                  <li>• MongoDB</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}