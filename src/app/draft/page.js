'use client'
import './styles.css'
import { motion } from 'framer-motion'
import { Header, Hero, Footer, Links, ContactForm } from "@/components/v2"
import { Toaster } from 'react-hot-toast'

export default function Draft() {

  return (
    <motion.main
      className="h-screen flex flex-col items-center gap-1.5 justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1 className='leading-none text-4xl'>Soon to have v3</h1>
      <p className='text-xs text-neutral-400'>I&apos;m sure my taste will change eventually :)</p>
    </motion.main>
  )
}
