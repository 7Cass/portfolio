import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-zinc-950 h-[100px] flex items-center'>
      <div className='w-full max-w-[1140px] mx-auto flex items-center justify-between'>
        <p className='text-zinc-200 text-4xl font-medium'>Feito por <span className='text-violet-500'>João Pedro</span> 🚀 - 2023</p>
        <a href='#hero' className='text-violet-500 border border-violet-500 hover:border-transparent hover:bg-violet-500 hover:text-zinc-200 transition-all duration-150 ease-in-out p-2 rounded'>
          <ArrowUp size={28} absoluteStrokeWidth={true} strokeWidth={2} />
        </a>
      </div>
    </footer>
  );
}