'use client'
import Image from "next/image"
import { FMNotion } from "@/assets"
import { TbFlareFilled } from "react-icons/tb"
import { useTextAnimation } from "@/hooks"

export function Hero() {
  const headingRef = useTextAnimation()

  return (
    <section className="space-y-6 z-30 relative">
      <h1 ref={headingRef} className="overflow-hidden">FM Linktree</h1>
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
              <p className='flex items-center gap-2 text-neutral-400'>
                frontend
                <TbFlareFilled className='size-2' />
                ui/ux
                <TbFlareFilled className='size-2' />
                graphics
              </p>
            </div>
            <div className='flex items-center gap-3 border border-neutral-800 rounded-[14px] p-[3px] pe-4'>
              <div className='grid place-content-center size-7 text-xs rounded-[11px] border border-neutral-800'>
                💻
              </div>
              <p className='text-neutral-100'>
                Frontend intern @ MMI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
