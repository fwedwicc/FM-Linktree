'use client'
import Image from "next/image"
import { FMNotion } from "@/assets"
import { TbFlareFilled } from "react-icons/tb"
import { useTextAnimation } from "@/hooks"

export function Hero() {
  const headingRef = useTextAnimation()

  const bio = {
    icon: '🎯',
    text: 'Currently grindinggg'
  }

  const interest = ['frontend', 'ui/ux', 'visuals']

  return (
    <section className="space-y-6 z-30 relative">
      <h1 ref={headingRef} className="overflow-hidden leading-none">FM Linktree</h1>
      <div className="flex">
        <div className='flex items-center md:gap-6 gap-4'>
          {/* Profile */}
          <div className='relative md:size-[5.9rem] size-[5.3rem] md:rounded-3xl rounded-[20px] overflow-hidden'>
            <Image
              className="object-cover size-full"
              src={FMNotion}
              alt="Frederick Moreno"
            />
          </div>
          {/* Content */}
          <div className='space-y-3'>
            <div className='space-y-1'>
              <h5 className='text-white'>Frederick Moreno</h5>
              <div className="flex items-center md:gap-2 gap-1.5">
                {interest.map((item, index) => (
                  <p className='text-neutral-400 flex items-center md:gap-2 gap-1.5' key={index}>
                    <span className='block'>{item}</span>
                    {index < interest.length - 1 && <TbFlareFilled className='size-2' />}
                  </p>
                ))}
              </div>
            </div>
            <div className='flex items-center gap-3 border border-neutral-800 rounded-[14px] p-[3px] pe-4'>
              <div className='grid place-content-center size-7 text-xs rounded-[11px] border border-neutral-800'>
                {bio.icon}
              </div>
              <p className='text-neutral-100'>
                {bio.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
