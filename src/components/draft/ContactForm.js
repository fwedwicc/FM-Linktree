'use client'
import { TbFlareFilled, TbX } from "react-icons/tb"
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
            initial={{ y: '-50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-50%', opacity: 0 }}
            transition={{
              type: "spring",
              damping: 26,
              stiffness: 300,
              bounce: 0.47,
              duration: 0.4
            }}
            className="absolute top-0 left-0 right-0 z-50 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-neutral-900 border border-neutral-800/50 rounded-[18px] p-6 w-full">
              {/* Form content */}
              <form onSubmit={handleSubmit} className="flex items-start gap-8">
                {/* <div className="w-full max-w-[12rem] space-y-6">
                  <h3>Drop me a line</h3>
                  <p className="text-xs text-neutral-400 px-4 py-2.5 rounded-xl bg-neutral-800/40">
                    I'll get back to you as soon as possible. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, qusit amet consectetur adipisicing elit.
                  </p>
                </div> */}
                <div className="flex flex-col w-full gap-6">
                  {/* Close button */}
                  <div className="flex items-start justify-between">
                    <div className='space-y-1'>
                      <h3>Drop me a line</h3>
                      <p className="text-xs text-neutral-400">
                        I'll get back to you via email :)
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="size-8 flex items-center justify-center bg-neutral-800/20 rounded-lg"
                      aria-label="Close modal"
                    >
                      <TbX className="size-4" />
                    </button>
                  </div>
                  <div className='grid grid-cols-2 gap-3'>
                    {/* name */}
                    <fieldset className='w-full space-y-1'>
                      <label htmlFor="name" className='text-sm'>Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        className="w-full input"
                      />
                    </fieldset>
                    {/* email */}
                    <fieldset className='w-full space-y-1'>
                      <label htmlFor="email" className='text-sm'>Email</label>
                      <input
                        type="text"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="w-full input"
                      />
                    </fieldset>
                    {/* message */}
                    <fieldset className='w-full space-y-1 col-span-full'>
                      <label htmlFor="message" className='text-sm'>Message</label>
                      <textarea
                        placeholder="Your message"
                        value={formData.message}
                        onChange={(e) => updateFormData('message', e.target.value)}
                        className="w-full input resize-none"
                        rows="2"
                      />
                    </fieldset>
                  </div>
                  <div className="flex items-end justify-end gap-3 col-span-full">
                    <button
                      type="submit"
                      className="flex items-center gap-3 bg-neutral-100 text-neutral-900 rounded-[13px] font-semibold leading-none text-[11px] px-3.5 py-[12px] transition duration-300 ease-in-out"
                    >
                      Send inquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}