'use client'
import Image from 'next/image';
import { FMLogo, FrederickMoreno } from '@/assets';
import { Card } from "@/components/Card";
import { Links } from "@/constants/data";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1">
      {/* Hero Section */}
      <div className="p-3 lg:h-screen h-[80vh]">
        <div className='flex flex-col h-full justify-between bg-neutral-900 border border-neutral-950 rounded-3xl p-6'>
          {/* Header */}
          <a href=''>
            <Image
              className="w-6 h-auto"
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
              <div className='flex items-start justify-between'>
                {[
                  { name: 'moreno.frederick.capiral@gmail.com', link: 'mailto:moreno.frederick.capiral@gmail.com' },
                  { name: 'FM Portfolio', link: 'https://fwedwicc.github.io/FM-Portfolio/' },
                ].map((item, index) => (
                  <a href={item.link} target='_blank' rel='noopener noreferrer' className='flex items-center text-indigo-400 text-xs underline' key={index}>{item.name}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 mt-[1.7px] size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Footer */}
          <p className='text-xs'>{currentYear} • Frederick Moreno</p>
        </div>
      </div>
      {/* Links Section */}
      <div className="p-8 space-y-8 md:h-screen h-auto overflow-auto">
        <div className="space-y-2">
          <h3>Professions</h3>
          <div className="grid grid-cols-3 gap-5">
            {Links.profession.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} link={card.link} />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3>Live Sites</h3>
          <div className="grid grid-cols-3 gap-5">
            {Links.sites.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} link={card.link} />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3>Courses</h3>
          <div className="grid grid-cols-3 gap-5">
            {Links.courses.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} link={card.link} />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3>Socials</h3>
          <div className="grid grid-cols-3 gap-5">
            {Links.socials.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} link={card.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
