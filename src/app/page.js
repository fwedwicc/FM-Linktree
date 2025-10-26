'use client'
import { motion } from 'framer-motion'
import { Header, Hero, Footer, Links, ContactForm } from "@/components/v2"
import { Toaster } from 'react-hot-toast'

export default function Home() {

  return (
    <motion.main
      className="min-h-screen grid lg:grid-cols-2 grid-cols-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Hero Section */}
      <section className="lg:p-4 p-2 lg:pr-0 pr-2 lg:h-screen h-[70vh]">
        <div className='relative flex flex-col h-full justify-between bg-neutral-950/20 border border-neutral-800/50 rounded-[28px] md:p-10 p-5 overflow-hidden'>
          <Toaster position="top-center" containerStyle={{ top: 20, }}
            toastOptions={{
              success: {
                duration: 3000,
                style: { background: '#1d1d1d', color: '#fff', border: '1px solid #252525', borderRadius: '14px', padding: '10px 14px', fontSize: '13px', },
                iconTheme: { primary: '#22c55e', secondary: '#fff', },
              }
            }}
          />
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
