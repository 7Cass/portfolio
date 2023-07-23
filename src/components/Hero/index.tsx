'use client';
import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <section id='hero'>
      <div className='max-w-[1140px] mx-auto'>
        <div className='w-full flex items-center min-h-[100vh] overflow-hidden'>
          <div className='w-full'>
            <h1 className='text-zinc-200 max-w-5xl text-8xl leading-[140%] font-medium mb-10'>Eaí, me chamo <span className='text-violet-500'>João</span>! <br /></h1>
            <h2 className='text-zinc-200 max-w-7xl text-7xl leading-[140%] font-medium mb-4'>Desenvolvo <span className='text-violet-500'>ideias</span> e soluciono <span className='text-violet-500'>problemas</span> com alta <span className='text-violet-500'>qualidade</span>, <span className='text-violet-500'>performance</span>  e <span className='text-violet-500'>modernismo</span></h2>

            <p className='text-zinc-400 max-w-7xl text-4xl leading-[160%] font-light'>
              <Typewriter
                options={{
                  loop: true,
                  cursorClassName: 'text-violet-500',
                  autoStart: true,
                  strings: 'Desenvolvedor Fullstack & Entusiasta de novas tecnologias.',
                  delay: 70,
                  deleteSpeed: 5,
                }} />
            </p>
            <a href='cv_fullstack.pdf' download='joao_pedro_arruda_fullstack_cv.pdf' className='bg-violet-500 hover:bg-violet-400 transition-colors text-zinc-200 px-8 py-12 rounded-sm flex items-center justify-center md:mt-16 text-4xl max-w-[350px]'>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}