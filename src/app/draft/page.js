'use client'
import './styles.css'
import { Inosuke } from "@/assets"
import { motion } from 'framer-motion'
import Image from "next/image"

export default function Draft() {

  return (
    <motion.main
      className="h-screen flex items-center justify-center p-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className='w-full max-w-xs flex flex-col items-center justify-center gap-1.5'>
        <div className='w-full h-40 mb-4 overflow-hidden rounded-2xl'>
          <Image src={Inosuke} alt="Inosuke" className='object-cover size-full' />
        </div>
        <h1 className='leading-none text-4xl'>Soon to have v3</h1>
        <p className='text-xs text-neutral-400'>My taste evolves faster than my projects :)</p>
      </div>
    </motion.main>
  )
}
