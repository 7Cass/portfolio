import Image from 'next/image'
import avatar from '@/assets/avatar.png'
import { GithubIcon, LinkedinIcon, Newspaper } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className='py-24 bg-zinc-950'>
      <div className='max-w-[1140px] mx-auto'>
        <div className='w-full flex items-center justify-between gap-20 p-12'>
          <div className='relative w-1/2 text-violet-500'>
            <svg viewBox="0 0 200 200" className="fill-current" xmlns="http://www.w3.org/2000/svg">
              <path transform="translate(100 100)">
                <animate attributeName="d" dur={14} repeatCount={'indefinite'}
                  values="
                    M41.2,-71C55.3,-63.3,69.8,-56,77.5,-44.2C85.1,-32.4,85.9,-16.2,84,-1.1C82.1,14,77.4,28,71.2,42.3C65,56.7,57.4,71.4,45.3,80.6C33.2,89.9,16.6,93.6,1.6,90.9C-13.5,88.2,-27,79.1,-41.2,71.1C-55.4,63.1,-70.4,56.2,-80.3,44.6C-90.2,32.9,-94.9,16.4,-94.5,0.2C-94.1,-16,-88.5,-31.9,-78.2,-42.9C-67.9,-53.8,-52.9,-59.7,-39.1,-67.5C-25.2,-75.3,-12.6,-85,0.5,-85.9C13.6,-86.7,27.2,-78.7,41.2,-71Z;
                    M43,-77.5C53.9,-68.2,59.5,-52.9,68.1,-39C76.6,-25.1,88.1,-12.5,89.5,0.8C90.9,14.2,82.2,28.3,73.2,41.5C64.2,54.6,54.9,66.8,42.7,72.6C30.4,78.3,15.2,77.5,-0.6,78.5C-16.4,79.5,-32.8,82.3,-46.6,77.5C-60.4,72.7,-71.7,60.3,-79.5,46.1C-87.3,31.9,-91.8,16,-91.4,0.2C-91,-15.5,-85.7,-31,-77.8,-45C-69.8,-58.9,-59.1,-71.4,-45.7,-79.2C-32.3,-87.1,-16.1,-90.2,0,-90.2C16.1,-90.1,32.1,-86.8,43,-77.5Z;
                    M37.6,-67.9C49.4,-58.3,60.1,-49.6,68,-38.4C75.9,-27.3,80.9,-13.6,81.6,0.4C82.3,14.4,78.6,28.8,72.1,42.4C65.6,55.9,56.2,68.5,43.7,76C31.2,83.5,15.6,85.9,0.6,84.8C-14.3,83.7,-28.6,79,-40,70.9C-51.4,62.7,-59.9,51.1,-68.4,38.7C-77,26.3,-85.5,13.2,-85.5,0C-85.4,-13.1,-76.7,-26.2,-68.1,-38.4C-59.5,-50.6,-50.9,-62,-39.6,-71.9C-28.2,-81.7,-14.1,-90.1,-0.6,-89.1C12.9,-88,25.8,-77.5,37.6,-67.9Z;
                    M41.2,-71C55.3,-63.3,69.8,-56,77.5,-44.2C85.1,-32.4,85.9,-16.2,84,-1.1C82.1,14,77.4,28,71.2,42.3C65,56.7,57.4,71.4,45.3,80.6C33.2,89.9,16.6,93.6,1.6,90.9C-13.5,88.2,-27,79.1,-41.2,71.1C-55.4,63.1,-70.4,56.2,-80.3,44.6C-90.2,32.9,-94.9,16.4,-94.5,0.2C-94.1,-16,-88.5,-31.9,-78.2,-42.9C-67.9,-53.8,-52.9,-59.7,-39.1,-67.5C-25.2,-75.3,-12.6,-85,0.5,-85.9C13.6,-86.7,27.2,-78.7,41.2,-71Z;" />
              </path>
            </svg>
            <div className="absolute left-[10%] top-[10%]">
              <Image src={avatar} alt="Avatar" />
            </div>
          </div>
          <div className='w-1/2'>
            <h4 className='text-violet-500 font-medium text-5xl'>Sobre mim</h4>
            <h2 className='font-medium text-zinc-200 text-7xl my-8'>João Pedro | JP Dev</h2>
            <h3 className='font-light text-zinc-200 text-4xl mb-12'>Fullstack Developer & UI Designer</h3>
            <p className='text-zinc-400 text-4xl leading-[160%] my-14'>Me chamo João Pedro, sou Fullstack Developer tentando focar cada vez mais no Frontend e UI/UX, porém não deixo de  lado o Backend e procuro sempre aprender novas tecnologias!
            </p>
            <nav className='w-full flex items-center justify-center'>
              <ul className='w-fit flex items-center justify-center gap-4 border border-zinc-600 rounded shadow-md bg-zinc-950 p-2'>
                <a className='border border-transparent transition-all hover:border-b-violet-500 cursor-pointer text-violet-500 p-8 rounded-sm'>
                  <GithubIcon size={40} strokeWidth={1} />
                </a>
                <a className='border border-transparent transition-all hover:border-b-violet-500 cursor-pointer text-violet-500 p-8 rounded-sm'>
                  <LinkedinIcon size={40} strokeWidth={1} />
                </a>
                <a className='border border-transparent transition-all hover:border-b-violet-500 cursor-pointer text-violet-500 p-8 rounded-sm'>
                  <Newspaper size={40} strokeWidth={1} />
                </a>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}