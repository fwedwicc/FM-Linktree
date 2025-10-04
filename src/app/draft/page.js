'use client'
import './styles.css'
import React from 'react'
import { Header, Hero, Footer, Links } from "@/components/draft"

export default function Draft() {

  return (
    <main className="min-h-screen grid lg:grid-cols-2 grid-cols-1">
      {/* Hero Section */}
      <section className="p-4 pr-0 lg:h-screen h-[70vh]">
        <div className='relative flex flex-col h-full justify-between bg-neutral-950/20 border border-neutral-800/50 rounded-[28px] p-10 overflow-hidden'>
          {/* <div className='absolute w-[45rem] h-[30rem] rounded-full blur-3xl bg-neutral-800/60 top-[-8rem] right-[-8rem] z-10' /> */}
          <Header />
          <Hero />
          <Footer />
        </div>
      </section>
      {/* Links Section */}
      <Links />
    </main>
  )
}
