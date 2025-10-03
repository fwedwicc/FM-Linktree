'use client'
import { TbFlareFilled } from "react-icons/tb"
import Image from "next/image"
import { BuyMeACoffee } from "@/assets"

export function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <footer className='flex justify-between items-end z-50 relative'>
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
  )
}
