'use client'
import './styles.css'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header, Hero, Footer, Links, ContactForm } from "@/components/draft"
import { Loader } from "@/components/ui/draft"

export default function Draft() {

  return (
    <motion.main
      className="min-h-screen grid lg:grid-cols-2 grid-cols-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Hero Section */}
      <section className="lg:p-4 p-2 lg:pr-0 pr-2 lg:h-screen h-[70vh]">
        <div className='relative flex flex-col h-full justify-between bg-neutral-950/20 border border-neutral-800/50 rounded-[28px] p-10 overflow-hidden'>
          <ContactForm />
          <Header />
          <Hero />
          <Footer />
        </div>
      </section>
      {/* Links Section */}
      <Links />
    </motion.main>
  )
}
