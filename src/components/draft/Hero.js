'use client'
import Image from "next/image"
import { FMNotion } from "@/assets"
import { TbFlareFilled } from "react-icons/tb"

export function Hero() {

  return (
    <section className="space-y-6 z-50 relative">
      <h1>FM Linktree</h1>
      <div className="flex">
        <div className='flex items-center gap-6'>
          {/* Profile */}
          <div className='relative size-[5.9rem] rounded-3xl overflow-hidden'>
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
  )
}
