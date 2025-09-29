'use client'
import './styles.css'
import React, { useState } from 'react'
import { TbFlareFilled } from "react-icons/tb"
import Image from 'next/image'
import { FMLogo, FrederickMoreno } from '@/assets'
import { BuyMeACoffee } from '@/assets'
import { Cursor } from "@/components/Cursor"
import { Card } from "@/components/draft/Card"
import { Ball } from "@/components/Ball"
import { Select } from "@/components/Select"
import { Links } from "@/constants/data"
import emailjs from '@emailjs/browser'
import { useRouter } from "next/navigation"

export default function Draft() {

  const currentYear = new Date().getFullYear()
  const [size, setSize] = useState("v2"); // default is "/"
  const router = useRouter();

  const handleChange = (val) => {
    setSize(val);
    if (val === "v1") {
      window.location.href = "https://fm-linktree.vercel.app/v1";
    } else {
      window.location.href = "https://fm-linktree.vercel.app/";
    }
  };


  return (
    <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1">
      <Cursor />
      <Ball />
      {/* Hero Section */}
      <div className="p-7 pr-0 lg:h-screen h-[70vh]">
        <div className='relative flex flex-col h-full justify-between bg-neutral-900 rounded-[26px] p-10'>

          {/* Header */}
          <header className=''>
            <Select
              id="size"
              options={["v1", "v2"]}
              value={size}
              styles="max-w-[10rem] w-full"
              onChange={handleChange}
            />
          </header>

          {/* Middle  Content */}
          <section className="space-y-6">
            <h1>FM Linktree</h1>
            <div className="flex">
              <div className='flex items-center gap-6'>
                {/* Profile */}
                <div className='relative size-[5.9rem] rounded-3xl bg-white overflow-hidden'>
                  <Image
                    className="object-cover size-full opacity-0"
                    src={FrederickMoreno}
                    alt="Frederick Moreno"
                  />
                </div>
                {/* Content */}
                <div className='space-y-3'>
                  <div className='space-y-1'>
                    <h5 className='text-white'>Frederick Moreno</h5>
                    <p className='flex items-center gap-2 text-neutral-300'>
                      frontend
                      <TbFlareFilled className='size-2' />
                      ui/ux
                      <TbFlareFilled className='size-2' />
                      graphics
                    </p>
                  </div>
                  <div className='flex items-center gap-3 border border-neutral-800 rounded-full p-[3px] pe-4'>
                    <div className='size-7 rounded-full border border-neutral-800'></div>
                    <p className='text-neutral-100'>
                      Currently eating noodles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className='flex justify-between items-end'>
            <p className='flex items-center gap-2 text-neutral-300'>
              fm
              <TbFlareFilled className='size-2' />
              {currentYear}
            </p>
            <a href='https://buymeacoffee.com/fwedwicc' target='_blank' rel='noopener noreferrer' className='flex items-center gap-3 bg-neutral-800 text-neutral-50 rounded-full text-[11px] p-[4px] pe-4 transition duration-300 ease-in-out'>
              <div className='size-8 rounded-full overflow-hidden'>
                <Image
                  className="object-cover size-full"
                  src={BuyMeACoffee}
                  alt="Buy Me A Coffee"
                />
              </div>
              Buy me a coffee
            </a>
          </footer>

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
                <Card key={index} title={card.title} status={card.status} link={card.link} logo={card.logo} styles={card.styles} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
