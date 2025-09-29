'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TbChevronDown } from "react-icons/tb"

export function Select({ id, label, required, styles, inputStyles, options = [], placeholder = "Choose", value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  const handleSelect = (option) => {
    onChange?.(option)
    setIsOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <fieldset className={`relative flex flex-col ${styles}`} ref={selectRef}>
      {/* Label */}
      <div className='flex items-start'>
        <label htmlFor={id} className={`${label ? '' : 'sr-only'} mb-1.5`}>
          {label}
        </label>
        {required && <span className='text-red-500 ml-1'>*</span>}
      </div>
      {/* Select */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`${inputStyles} w-full flex justify-between items-center gap-2 px-3 py-2 text-sm border border-neutral-200 bg-neutral-100/40 rounded-[11px] focus:outline-none focus:ring-[3px] focus:ring-violet-200/50 focus:border-violet-300/70 transition duration-300 ease-in-out cursor-pointer`}
      >
        <p>{value || placeholder}</p>
        <TbChevronDown className={`transition-smooth ${isOpen ? "rotate-180" : ''}`} />
      </button>
      {/* Dropdown Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 270, damping: 14, bounce: 0.45 }}
            className="space-y-0.5 absolute w-full mt-18 bg-white border border-neutral-200/50 rounded-[12px] p-1 shadow-xl shadow-neutral-400/10 z-10"
          >
            <button
              type="button"
              disabled
              className="w-full text-left px-2.5 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-smooth text-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Choose
            </button>
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-smooth text-neutral-800
              ${value === option ? "bg-neutral-200/50" : "hover:bg-neutral-200/50"}`}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </fieldset>
  )
}