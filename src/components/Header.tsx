'use client';
import { TerminalWindow, List, X } from '@phosphor-icons/react'
import { useState } from 'react';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className='flex justify-between h-20 w-full lg:px-72 px-8 text-zinc-200 bg-zinc-950 shadow-md'>
            <div className='flex items-center gap-2'>
                <TerminalWindow className='w-12 h-12 text-violet-500' weight='light' />
                <h1 className='text-4xl'>JP/<span className='text-violet-500 font-light'>Dev</span></h1>
            </div>
            <div className='flex items-center z-20'>
                { showMenu ? <X className='md:w-10 md:h-10 w-10 h-10 cursor-pointer' onClick={() => setShowMenu(!showMenu)}/> : <List className='md:w-10 md:h-10 w-10 h-10 cursor-pointer' onClick={() => setShowMenu(!showMenu)} /> }
            </div>
            <div className={`absolute ${showMenu ? 'right-0 block' : 'right-[250px] lg:right-[-450px] hidden'} z-10 transition-all bg-zinc-950 w-[250px] lg:w-[450px] flex px-12 py-32 h-screen`}>
                <div className='w-full text-lg flex flex-col items-end lg:items-start gap-6'>
                    <p>Home</p>
                    <p>Projetos</p>
                    <p>Sobre</p>
                </div>
            </div>
        </header>
    )
}