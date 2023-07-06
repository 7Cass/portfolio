// import { useEffect, useState } from "react"
// import api from "@/functions/axios";
// import axios from "axios";
// import { headers } from "next/dist/client/components/headers"
import rentxCover from '@/assets/rentx.jpg'
import habitsCover from '@/assets/habits.jpg'
import { ExternalLink, GithubIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface Language {
  name: string;
  color: string;
  icon?: string;
}

interface Project {
  name: string;
  description: string;
  cover_img: StaticImageData;
  repo_url: string;
  deploy_url?: string;
  languages: Language[];
}

const projects: Project[] = [
  {
    name: 'Rentx',
    description: 'Renting Cars API',
    repo_url: 'https://github.com/7Cass/Rentx',
    cover_img: rentxCover,
    languages: [
      { name: 'Typescript', color: 'bg-blue-500' },
      { name: 'Express', color: 'bg-green-500' },
      { name: 'Docker', color: 'bg-blue-700' },
      { name: 'Node', color: 'bg-green-600' },
    ]
  },
  {
    name: 'Habits.js',
    description: 'Renting Cars API',
    repo_url: 'https://github.com/7Cass/Rentx',
    deploy_url: 'https://google.com.br',
    cover_img: habitsCover,
    languages: [
      { name: 'Typescript', color: 'bg-blue-500' },
      { name: 'Docker', color: 'bg-blue-700' },
      { name: 'NodeJS', color: 'bg-green-500' },
    ]
  },
  {
    name: 'Rentx',
    description: 'Renting Cars API',
    repo_url: 'https://github.com/7Cass/Rentx',
    cover_img: rentxCover,
    languages: [
      { name: 'Typescript', color: 'bg-blue-500' },
      { name: 'Docker', color: 'bg-blue-700' },
      { name: 'NodeJS', color: 'bg-green-500' },
    ]
  },
  // {
  //   name: 'Rentx',
  //   description: 'Renting Cars API',
  //   repo_url: 'https://github.com/7Cass/Rentx',
  //   cover_img: rentxCover,
  //   languages: [
  //     { name: 'Typescript', color: 'bg-blue-500' },
  //     { name: 'Docker', color: 'bg-blue-700' },
  //     { name: 'NodeJS', color: 'bg-green-500' },
  //   ]
  // }
];

export function Projects() {
  return (
    <div className="space-y-12">
      <h1 className="text-6xl">Alguns Projetos... 🚀</h1>
      <div className="w-full grid grid-flow-row gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div key={i} className="h-[400px] overflow-hidden bg-zinc-950 text-zinc-200 rounded-sm shadow-md hover:-translate-y-4 duration-300">
            <Image className="w-full h-64" src={p.cover_img} alt='Rentx Cover'/>
            <div className='p-4'>
              <div className='flex items-center justify-between mb-4 pb-2 border-b border-b-zinc-400'>
                <h1 className="overflow-auto text-xl font-medium">{p.name}</h1>
                <div className='flex gap-2'>
                  <a href={p.repo_url} rel='noopener noreferer' target='_blank'><GithubIcon size={22} className='text-zinc-200 cursor-pointer' strokeWidth={2} /></a>
                  {p.deploy_url && <a href={p.deploy_url} rel='noopener noreferer' target='_blank'><ExternalLink size={22} className='text-zinc-200 cursor-pointer' strokeWidth={2} /></a>}
                </div>
              </div>
              <p className='text-sm'>{p.description}</p>
              <div className='flex flex-wrap gap-1 my-2'>
                {p.languages.map((l, i) => (
                  <span key={i} className={`text-xs font-light ${l.color} p-1 rounded-sm`}>{l.name}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* {repos.map((r, i) => (
              <div key={i} className="flex flex-col gap-4 items-start justify-start h-[200px] p-4 bg-violet-500 rounded-sm shadow-lg hover:-translate-y-4 duration-300">
                <h1 className="w-full overflow-auto text-xl">{r.name}</h1>
                <div className="flex flex-col items-start justify-start">
                  <p className="text-lg font-light">{r.description}</p>
                  { r.language && <span className="bg-zinc-200 p-1 rounded-sm text-violet-500">{r.language}</span>}
                </div>
              </div>
            ))} */}
      </div>
    </div>
  )
}