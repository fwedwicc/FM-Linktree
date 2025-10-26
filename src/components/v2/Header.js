'use client'
import { Select } from "../ui/v2/Select"
import { useState } from "react"
import { FMLogo } from "@/assets"
import Image from "next/image"
import { useFormStore } from "@/store/useFormStore"

export function Header() {

  const [version, setVersion] = useState("v2")
  const { openModal } = useFormStore()

  const handleChange = (ver) => {
    setVersion(ver)
    if (ver === "v1") {
      window.location.href = "https://fm-linktree.vercel.app/v1"
    } else {
      window.location.href = "https://fm-linktree.vercel.app/"
    }
  }

  return (
    <header className='flex items-start justify-between z-40 relative'>
      <div className='flex items-center gap-4'>
        <a href='https://fwedwicc.github.io/FM-Portfolio/' target='_blank' rel='noopener noreferrer' >
          <Image
            className="w-5 h-auto"
            src={FMLogo}
            alt="FM Logo"
          />
        </a>
        <Select
          id="size"
          options={["v1", "v2"]}
          value={version}
          styles="w-auto"
          onChange={handleChange}
        />
      </div>
      <button onClick={openModal} className='inline-flex items-center gap-3 bg-neutral-100 hover:bg-white text-neutral-900 rounded-[13px] font-semibold leading-none text-[11px] px-3.5 py-[12px] transition duration-300 ease-in-out'>
        Drop me a line
      </button>
    </header>
  )
}
