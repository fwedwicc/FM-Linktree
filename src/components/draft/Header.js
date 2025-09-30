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
    <header className='flex items-start justify-between'>
      <div className='flex items-center gap-3'>
        <a href='https://fwedwicc.github.io/FM-Portfolio/' target='_blank' rel='noopener noreferrer' >
          <Image
            className="md:w-7 w-6 h-auto"
            src={FMLogo}
            alt="FM Logo"
          />
        </a>
        <Select
          id="size"
          options={["v1", "v2"]}
          value={version}
          styles="max-w-[10rem] w-full"
          onChange={handleChange}
        />
      </div>
      <button className='inline-flex items-center gap-3 bg-neutral-100 text-neutral-900 rounded-full font-medium leading-none text-[11px] px-4 py-[12px] transition duration-300 ease-in-out'>
        Drop me a line
      </button>
    </header>
  )
}
