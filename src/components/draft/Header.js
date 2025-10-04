'use client'
import { Select } from "../ui/draft/Select"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { FMLogo } from "@/assets"
import Image from "next/image"

export function Header() {

  const [version, setVersion] = useState("v2")
  const router = useRouter()

  const handleChange = (ver) => {
    setVersion(ver)
    if (ver === "v1") {
      window.location.href = "https://fm-linktree.vercel.app/v1"
    } else {
      window.location.href = "https://fm-linktree.vercel.app/"
    }
  }

  return (
    <header className='flex items-start justify-between z-50 relative'>
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
      <button className='inline-flex items-center gap-3 bg-neutral-100 text-neutral-900 rounded-[13px] font-semibold leading-none text-[11px] px-3.5 py-[12px] transition duration-300 ease-in-out'>
        Drop me a line
      </button>
    </header>
  )
}
