'use client';
import Header from "@/components/Header2";
import Hero from "@/components/Hero2";
import About from "@/components/About";
// import { ArrowRight, GithubLogo, Globe } from '@phosphor-icons/react'
import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, GithubIcon, LinkedinIcon } from 'lucide-react';
import { TerminalWindow, List, X } from '@phosphor-icons/react'
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Header />

      <main>
        <Hero />
        <About />
        <Experiences />
        <Projects />
      </main>

      {/* <div className="w-full flex flex-col lg:px-72 px-8 text-zinc-200">
        <Hero />
        <Projects />


        <div>About</div>
      </div>


      <footer className="w-full lg:px-72 px-8 py-8 bg-zinc-950 text-zinc-200">
        <p className="text-xl">Feito por João Pedro A.</p>
      </footer> */}
    </>
  )
}
