'use client'
import Image from 'next/image';
import { Card } from "@/components/Card";
import { Links } from "@/constants/data";

export default function Home() {

  return (
    <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1 gap-2">
      {/* Hero Section */}
      <div className="p-3 md:h-screen h-[60vh]">
        <div className='flex flex-col h-full justify-between bg-stone-900/20 border border-stone-900/40 rounded-3xl p-6'>
          <div>Top</div>
          <div className="space-y-6">
            <h1>Linktree</h1>
            <div className="border-y border-stone-800 py-4 space-y-4">
              <div className='flex items-start justify-between'>
                <a href='' className='text-indigo-400 md:text-sm text-xs underline'>moreno.frederick.capiral@gmail.com</a>
                <a href='' className='text-indigo-400 md:text-sm text-xs underline'>FM Portfolio</a>
              </div>
              <div className='flex items-start gap-3'>
                <Image
                  className="mt-2 size-8 border-2 ring-2 ring-indigo-500 border-stone-950 rounded-full"
                  src=""
                  alt="Frederick Moreno"
                />
                <div>
                  <h4>Frederick Moreno</h4>
                  <p className='leading-none text-xs'>Front-end Developer | UI/UX Designer | IT Student</p>
                </div>
              </div>
            </div>
          </div>
          <div>Bottom</div>
        </div>
      </div>
      {/* Links Section */}
      <div className="p-8 space-y-8 md:h-screen h-auto overflow-auto">
        <div className="space-y-2">
          <h3>Professions</h3>
          <div className="grid grid-cols-3 gap-5">
            {Links.profession.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3>Live Sites</h3>
          <div className="grid grid-cols-3 gap-5">
            {Links.sites.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} />
            ))} {Links.profession.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} />
            ))} {Links.profession.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} />
            ))} {Links.profession.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} />
            ))} {Links.profession.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} />
            ))} {Links.profession.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} />
            ))} {Links.profession.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} />
            ))} {Links.profession.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} />
            ))} {Links.profession.map((card, index) => (
              <Card key={index} title={card.title} user={card.user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
