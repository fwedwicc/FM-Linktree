'use client'
import './styles.css'
import React from 'react'
import { Header, Hero, Footer, Links } from "@/components/draft"

export default function Draft() {

  return (
    <main className="min-h-screen grid lg:grid-cols-2 grid-cols-1">
      {/* Hero Section */}
      <section className="p-7 pr-0 lg:h-screen h-[70vh]">
        <div className='relative flex flex-col h-full justify-between bg-neutral-900 rounded-[26px] p-10'>
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
