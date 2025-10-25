'use client'
import { TbFlareFilled } from "react-icons/tb"
import Image from "next/image"
import { BuyMeACoffee } from "@/assets"
import { useFormStore } from '@/store/useFormStore'
import { motion, AnimatePresence } from 'framer-motion'

export function ContactForm() {
  const { isModalOpen, closeModal, formData, updateFormData } = useFormStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    // temp
    console.log('Form submitted:', formData)
  }

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop - absolute to parent container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
            className="absolute inset-0 bg-neutral-950/20 backdrop-blur-sm z-40 rounded-[28px]"
          />

          {/* Modal - slides down from top */}
          <motion.div
            initial={{ y: '-90%', opacity: 0, scale: 1 }}
            animate={{ y: 0, opacity: 1, scale: 0.95 }}
            exit={{ y: '-90%', opacity: 0, scale: 1 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 270,
              bounce: 0.45,
              duration: 0.3
            }}
            className="absolute top-0 left-0 right-0 z-50 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-neutral-900 border border-neutral-800/50 rounded-[18px] p-6 w-full">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-8 right-8 text-neutral-400 hover:text-white text-2xl transition-colors"
                aria-label="Close modal"
              >
                ×
              </button>

              {/* Form content */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3>Drop me a line</h3>
                <div className='grid grid-cols-2 gap-3'>
                  {/* name */}
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-neutral-800/20 border border-neutral-700/30 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                    required
                  />
                  {/* email */}
                  <input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-neutral-800/20 border border-neutral-700/30 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                    required
                  />
                  {/* message */}
                  <textarea
                    placeholder="Your message"
                    value={formData.message}
                    onChange={(e) => updateFormData('message', e.target.value)}
                    className="w-full col-span-full px-3 py-2 text-xs bg-neutral-800/20 border border-neutral-700/30 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                    rows="4"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-neutral-100 text-neutral-900 rounded-[13px] font-semibold leading-none text-[11px] px-3.5 py-[12px] transition duration-300 ease-in-out"
                >
                  Send inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}