'use client'
import { TerminalWindow } from "@phosphor-icons/react"

export default function Header() {
  return (
    <header className='w-full fixed top-0 left-0 z-10 bg-zinc-900 bg-opacity-60 backdrop-blur border-b border-zinc-900 shadow'>
      <div className='max-w-[1140px] mx-auto'>
        <nav className='flex justify-between items-center flex-wrap h-[100px]'>
          <div className='flex items-center text-zinc-200 '>
            <TerminalWindow className='w-20 h-20 text-violet-500' weight='light' />
            <h1 className='text-6xl'>JP/<span className='text-violet-500 font-light'>Dev</span></h1>
          </div>
          <ul className='flex list-none text-zinc-200'>
            <li className='ml-20 border-b-2 border-b-transparent hover:border-b-violet-500 transition-all'>
              <a href="#hero" className='text-4xl'>Hero</a>
            </li>
            <li className='ml-20 border-b-2 border-b-transparent hover:border-b-violet-500 transition-all'>
              <a href="#about" className='text-4xl'>Sobre</a>
            </li>
            <li className='ml-20 border-b-2 border-b-transparent hover:border-b-violet-500 transition-all'>
              <a href="#experiences" className='text-4xl'>XP</a>
            </li>
            <li className='ml-20 border-b-2 border-b-transparent hover:border-b-violet-500 transition-all'>
              <a href="#projects" className='text-4xl'>Projetos</a>
            </li>
            <li className='ml-20 border-b-2 border-b-transparent hover:border-b-violet-500 transition-all'>
              <a href="#services" className='text-4xl'>Serviços</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}