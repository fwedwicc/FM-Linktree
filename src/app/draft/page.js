'use client'
import './styles.css'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header, Hero, Footer, Links } from "@/components/draft"
import { Loader } from "@/components/ui/draft"

export default function Draft() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Loader />
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <motion.main
          className="min-h-screen grid lg:grid-cols-2 grid-cols-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5, delay: isLoading ? 0 : 0.2 }}
        >
          {/* Hero Section */}
          <section className="p-4 pr-0 lg:h-screen h-[70vh]">
            <div className='relative flex flex-col h-full justify-between bg-neutral-950/20 border border-neutral-800/50 rounded-[28px] p-10 overflow-hidden'>
              <Header />
              <Hero />
              <Footer />
            </div>
          </section>
          {/* Links Section */}
          <Links />
        </motion.main>
      )}
    </>
  )
}
