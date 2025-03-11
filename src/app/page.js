'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FMLogo, FrederickMoreno } from '@/assets'
import { Cursor } from "@/components/Cursor"
import { Card } from "@/components/Card"
import { Ball } from "@/components/Ball"
import { Links } from "@/constants/data"

export default function Home() {
  const currentYear = new Date().getFullYear()
  const [isOpenForm, setIsOpenForm] = useState(false)

  const closeModalForm = () => {
    setIsOpenForm(false)
  }

  const openModalForm = () => {
    setIsOpenForm(true)
  }



  return (
    <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1">
      <Cursor />
      <Ball />
      {/* Contact Form */}
      <div
        className={`z-40 fixed inset-0 flex items-center justify-center bg-neutral-900/40 transition-all duration-300 ease-out ${isOpenForm ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className={`bg-neutral-900 backdrop-blur-md border border-neutral-800/40 rounded-2xl md:p-6 p-4 max-w-sm text-center transform transition-all duration-300 ease-out ${isOpenForm ? 'scale-100' : 'scale-95'
            }`}
        >
          <h1 className='text-neutral-200 text-xl'>Under construction :)</h1>
          <button onClick={closeModalForm}>Close</button>
        </div>
      </div>
      {/* Hero Section */}
      <div className="p-3 lg:h-screen h-[70vh]">
        <div className='relative flex flex-col h-full justify-between bg-neutral-800/20 border border-neutral-800 rounded-3xl rounded-tr-[6.3rem] p-6'>
          <div className='size-6 rounded-full bg-neutral-200 absolute top-0 right-0'></div>
          {/* Header */}
          <a href='https://fwedwicc.github.io/FM-Portfolio/'>
            <Image
              className="md:w-6 w-5 h-auto"
              src={FMLogo}
              alt="FM Logo"
            />
          </a>
          {/* Middle  Content */}
          <div className="space-y-6">
            <h1>FM Linktree</h1>
            <div className="border-y border-dashed border-neutral-800 py-4 space-y-6">
              <div className='flex items-start gap-3'>
                <Image
                  className="mt-2 size-8 border-2 ring-2 ring-indigo-500 border-neutral-950 rounded-full"
                  src={FrederickMoreno}
                  alt="Frederick Moreno"
                />
                <div>
                  <h4>Frederick Moreno</h4>
                  <p className='leading-none text-xs'>Front-end Developer • UI/UX Designer • IT Student</p>
                </div>
              </div>
              <div className='flex items-start justify-between flex-wrap-reverse gap-1'>
                <button onClick={openModalForm} className='flex items-center text-indigo-400 text-xs underline'>Drop me a line
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 mt-[1.7px] size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
                <a href='https://fwedwicc.github.io/FM-Portfolio/' target='_blank' rel='noopener noreferrer' className='flex items-center text-indigo-400 text-xs underline'>FM Portfolio
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 mt-[1.7px] size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Footer */}
          <p className='text-xs'>{currentYear} • Frederick Moreno</p>
        </div>
      </div>
      {/* Links Section */}
      <div className="md:p-8 p-5 md:space-y-8 space-y-6 md:h-screen h-auto overflow-auto custom-scrollbar">
        {[
          { title: "Professions / Socials", data: Links.profession },
          { title: "Live Sites", data: Links.sites },
          { title: "Other Profiles", data: Links.courses },
        ].map((links, index) => (
          <div className="space-y-2" key={index}>
            <h3>{links.title}</h3>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
              {links.data.map((card, index) => (
                <Card key={index} title={card.title} status={card.status} link={card.link} logo={card.logo} styles={card.styles} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
