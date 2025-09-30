'use client'
import './styles.css'
import React from 'react'
import { Card } from "@/components/ui/draft"
import { Header, Hero, Footer } from "@/components/draft"
import { Links } from "@/constants/data"

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
      <section className="md:p-8 p-5 md:space-y-8 space-y-6 md:h-screen h-auto overflow-auto custom-scrollbar">
        {[
          { title: "Professions / Socials", data: Links.profession },
          { title: "Live Sites", data: Links.sites },
          { title: "Other Profiles", data: Links.courses },
        ].map((links, index) => (
          <div className="space-y-2" key={index}>
            <h3>{links.title}</h3>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
              {links.data.map((card, index) => (
                <Card key={index} title={card.title} status={card.status} link={card.link} logo={card.logo} styles={card.styles} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
