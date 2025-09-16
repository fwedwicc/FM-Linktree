'use client'
import './styles.css'
import React, { useState } from 'react'
import Image from 'next/image'
import { FMLogo, FrederickMoreno } from '@/assets'
import { BuyMeACoffee } from '@/assets'
import { Cursor } from "@/components/Cursor"
import { LightCard } from "@/components/LightCard"
import { Ball } from "@/components/Ball"
import { Select } from "@/components/Select"
import { Links } from "@/constants/data"
import emailjs from '@emailjs/browser'

export default function Draft() {

  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1">
      <Cursor />
      <Ball />
      {/* Hero Section */}
      <div className="p-2 lg:h-screen h-[70vh] border border-red-500">
        <div className='relative flex flex-col h-full justify-between bg-neutral-900 rounded-3xl p-1.5'>

          {/* Header */}
          <div className='border border-red-500'>

          </div>
          {/* Middle  Content */}
          <div className="space-y-6 border border-red-500">
            <h1 className='text-neutral-100'>FM Linktree</h1>
            <div className="border-y border-dashed border-neutral-800 py-4 space-y-6">
              <div className='flex items-start gap-3'>
                <Image
                  className="mt-2 size-8 border-2 ring-2 ring-indigo-400 border-neutral-950 rounded-full"
                  src={FrederickMoreno}
                  alt="Frederick Moreno"
                />
                <div>
                  <h4 className='text-neutral-100'>Frederick Moreno</h4>
                  <p className='text-neutral-400 leading-none text-xs'>Frontend • UI/UX</p>
                </div>
              </div>
              <div className='flex items-start justify-between flex-wrap-reverse gap-1'>
                <button onClick={null} className='flex items-center text-indigo-400 text-xs underline'>Drop me a line
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
          <div className='flex justify-between items-center p-1 pl-5 border border-neutral-600 rounded-[17px]'>
            <p className='text-xs text-neutral-800'>FM • {currentYear}</p>
            <a href='https://buymeacoffee.com/fwedwicc' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 text-neutral-200 text-xs rounded-[12px] bg-neutral-900 p-2 transition duration-300 ease-in-out'>
              <Image
                className="h-6 w-auto rounded-[5px]"
                src={BuyMeACoffee}
                alt="Buy Me A Coffee"
              />
              Buy me a coffee
            </a>
          </div>

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
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
              {links.data.map((card, index) => (
                <LightCard key={index} title={card.title} status={card.status} link={card.link} logo={card.logo} styles={card.styles} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
