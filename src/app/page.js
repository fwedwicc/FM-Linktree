'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FMLogo, FrederickMoreno } from '@/assets'
import { BuyMeACoffee } from '@/assets'
import { Cursor } from "@/components/Cursor"
import { Card } from "@/components/Card"
import { Ball } from "@/components/Ball"
import { Links } from "@/constants/data"
import emailjs from '@emailjs/browser'

export default function Home() {

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
  const publicUser = process.env.NEXT_PUBLIC_PUBLIC_USER

  const currentYear = new Date().getFullYear()
  const [isOpenForm, setIsOpenForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // Form Validation
  const validate = () => {
    let formErrors = {}
    if (!formData.name) formErrors.name = 'Name is required'
    if (!formData.message) formErrors.message = 'Message is required'
    if (!formData.email) {
      formErrors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid'
    }
    return formErrors
  }

  // Hnadle form logic
  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validate()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      console.log('Form data submitted:', formData)
      setErrors({})
      setIsOpenForm(false)
      emailjs
        .send(
          serviceId,
          templateId,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          publicUser
        )
        .then(
          (result) => {
            console.log(result.text)
            // Simulate form submission
            setTimeout(() => {
              setFormData({
                name: '',
                email: '',
                message: '',
              })
              setIsSuccessOpen(true)
            }, 1000)
          },
          (error) => {
            console.log(error.text)
            alert('An error occurred. Please try again.')
          }
        )
    }
  }

  // Open Contact Form
  const openModalForm = () => {
    setIsOpenForm(true)
  }

  // Close Contact Form
  const closeModalForm = () => {
    setIsOpenForm(false)
    setErrors({})
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  const closeSuccessModal = () => {
    setIsSuccessOpen(false)
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1">
      <Cursor />
      <Ball />
      {/* Contact Form */}
      <div
        className={`z-40 fixed inset-0 flex items-center justify-center bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 ease-out ${isOpenForm ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className={`bg-neutral-900 backdrop-blur-md border border-neutral-700/40 rounded-3xl md:p-6 p-5 mx-3 max-w-lg text-center transform transition-all duration-300 ease-out ${isOpenForm ? 'scale-100' : 'scale-95'
            }`}
        >
          <form onSubmit={handleSubmit} className="space-y-3">
            <h3 className='text-left mb-8 leading-none text-2xl'>Drop me a line.</h3>
            {/* Complete Name */}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className={`relative block overflow-hidden border-b bg-transparent pt-3 focus-within:border-indigo-400 transition-all duration-300 ease-in-out ${errors.name ? 'border-yellow-500/30' : 'border-neutral-800'}`}
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Name'
                    className="peer h-8 w-full border-none bg-transparent text-neutral-300 p-0 placeholder-transparent focus:border-transparent outline-none focus:ring-0 focus:outline-none sm:text-sm transition-all duration-300 ease-in-out"
                  />

                  <span
                    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-neutral-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                  >
                    Name
                  </span>
                </label>
                {errors.name && <p className="text-yellow-400 md:text-sm text-xs mt-1 text-left">{errors.name}</p>}
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`relative block overflow-hidden border-b bg-transparent pt-3 focus-within:border-indigo-400 transition-all duration-300 ease-in-out ${errors.email ? 'border-yellow-500/30' : 'border-neutral-800'}`}
                >
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Name'
                    className="peer h-8 w-full border-none bg-transparent text-neutral-300 p-0 placeholder-transparent focus:border-transparent outline-none focus:ring-0 focus:outline-none sm:text-sm transition-all duration-300 ease-in-out"
                  />

                  <span
                    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-neutral-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                  >
                    Email
                  </span>
                </label>
                {errors.email && <p className="text-yellow-400 md:text-sm text-xs mt-1 text-left">{errors.email}</p>}
              </div>
              {/* Message */}
              <div className='col-span-full'>
                <textarea
                  id="message"
                  className={`w-full resize-none bg-transparent border-b px-0 align-top focus:border-indigo-400 outline-none placeholder:text-neutral-400 sm:placeholder:text-sm focus:ring-0 focus:outline-none sm:text-sm text-neutral-300 transition-all duration-300 ease-in-out ${errors.message ? 'border-yellow-500/30' : 'border-neutral-800'}`}
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <p className="text-yellow-400 md:text-sm text-xs mt-1 text-left">{errors.message}</p>}
              </div>
            </div>
            {/* Preview */}
            <div className="pt-6 space-y-1 overflow-hidden">
              <p className='text-xs text-left'>Preview:</p>
              <p className="italic text-start text-neutral-300 text-sm">
                &ldquo;Hi there! I&apos;m{" "}
                {formData.name ? (
                  <span className="text-indigo-400">{formData.name}</span>
                ) : (
                  <span className="text-indigo-400">your name</span>
                )}
                . You can reach me at{" "}
                {formData.email ? (
                  <span className="text-indigo-400">{formData.email}</span>
                ) : (
                  <span className="text-indigo-400">your email</span>
                )}
                , Here&apos;s my message;{" "}
                {formData.message ? (
                  <span className="text-indigo-400">{formData.message}</span>
                ) : (
                  <span className="text-indigo-400 hyphens-manual break-words">your message</span>
                )}&rdquo;
              </p>
            </div>
            {/* Action Buttons */}
            <div className='flex justify-end gap-3 pt-8'>
              <button onClick={closeModalForm} type="button" className='bg-neutral-800/70 hover:bg-neutral-700/50 md:py-2 py-1.5 md:px-3 px-2.5 rounded-md text-neutral-300 text-sm transition-all duration-300 ease-in-out'>Close</button>
              <button type="submit" className='bg-indigo-500 hover:bg-indigo-600 md:py-2 py-1.5 md:px-3 px-2.5 rounded-md text-neutral-200 text-sm transition-all duration-300 ease-in-out'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      {/* Success Modal */}
      <div
        className={`z-40 fixed inset-0 flex items-center justify-center bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 ease-out ${isSuccessOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className={`bg-neutral-900 backdrop-blur-md border border-neutral-700/40 rounded-3xl md:p-6 p-5 mx-3 max-w-sm text-center transform transition-all duration-300 ease-out ${isSuccessOpen ? 'scale-100' : 'scale-95'
            }`}
        >
          <div className="mb-6 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-14 text-green-500 mb-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            <p className='text-md text-neutral-300'>Message sent successfully! <br />I&apos;ll get back to you soon!</p>
          </div>
          <button onClick={closeSuccessModal} className='bg-indigo-500 hover:bg-indigo-600 md:py-2 py-1.5 md:px-3 px-2.5 rounded-md text-neutral-200 text-sm transition-all duration-300 ease-in-out'>Got it</button>
        </div>
      </div>
      {/* Hero Section */}
      <div className="p-3 lg:h-screen h-[70vh]">
        <div className='relative flex flex-col h-full justify-between bg-neutral-800/20 border border-neutral-800 rounded-3xl rounded-tr-[6.3rem] md:p-6 p-3'>
          <div className='size-6 rounded-full bg-neutral-200 absolute top-0 right-0'></div>
          {/* Header */}
          <a href='https://fwedwicc.github.io/FM-Portfolio/'>
            <Image
              className="md:w-6 w-5 h-auto"
              src={FMLogo}
              alt="FM Logo"
            />
          </a>
          {/* Middle  Content */}
          <div className="space-y-6">
            <h1>FM Linktree</h1>
            <div className="border-y border-dashed border-neutral-800 py-4 space-y-6">
              <div className='flex items-start gap-3'>
                <Image
                  className="mt-2 size-8 border-2 ring-2 ring-indigo-400 border-neutral-950 rounded-full"
                  src={FrederickMoreno}
                  alt="Frederick Moreno"
                />
                <div>
                  <h4>Frederick Moreno</h4>
                  <p className='leading-none text-xs'>Front-end Developer • UI/UX Designer • IT Student</p>
                </div>
              </div>
              <div className='flex items-start justify-between flex-wrap-reverse gap-1'>
                <button onClick={openModalForm} className='flex items-center text-indigo-400 text-xs underline'>Drop me a line
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 mt-[1.7px] size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
                <a href='https://fwedwicc.github.io/FM-Portfolio/' target='_blank' rel='noopener noreferrer' className='flex items-center text-indigo-400 text-xs underline'>FM Portfolio
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 mt-[1.7px] size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className='flex flex-wrap justify-between items-end'>
            <p className='text-xs'>{currentYear} • Frederick Moreno</p>
            <a href='https://buymeacoffee.com/fwedwicc' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 text-neutral-300 text-xs rounded-[10px] border border-neutral-700/50 hover:bg-yellow-300/10 hover:border-yellow-400/50 p-2 transition duration-300 ease-in-out'>
              <Image
                className="h-6 w-auto rounded-[5px]"
                src={BuyMeACoffee}
                alt="Buy Me A Coffee"
              />
              Buy me a coffee
            </a>
          </div>
        </div>
      </div>
      {/* Links Section */}
      <div className="md:p-8 p-5 md:space-y-8 space-y-6 md:h-screen h-auto overflow-auto custom-scrollbar">
        {[
          { title: "Professions / Socials", data: Links.profession },
          { title: "Live Sites", data: Links.sites },
          { title: "Other Profiles", data: Links.courses },
        ].map((links, index) => (
          <div className="space-y-2" key={index}>
            <h3>{links.title}</h3>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
              {links.data.map((card, index) => (
                <Card key={index} title={card.title} status={card.status} link={card.link} logo={card.logo} styles={card.styles} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
