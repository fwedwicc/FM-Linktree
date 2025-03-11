'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FMLogo, FrederickMoreno } from '@/assets'
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
              // setIsSuccessOpen(true)
            }, 1000)
          },
          (error) => {
            console.log(error.text)
            alert('An error occurred. Please try again.')
          }
        )
    }
  }


  // Close Contact Form
  const closeModalForm = () => {
    setIsOpenForm(false)
  }

  // Open Contact Form
  const openModalForm = () => {
    setIsOpenForm(true)
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1">
      <Cursor />
      <Ball />
      {/* Contact Form */}
      <div
        className={`z-40 fixed inset-0 flex items-center justify-center bg-neutral-900/40 transition-all duration-300 ease-out ${isOpenForm ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className={`bg-neutral-900 backdrop-blur-md border border-neutral-800/40 rounded-2xl md:p-6 p-4 max-w-sm text-center transform transition-all duration-300 ease-out ${isOpenForm ? 'scale-100' : 'scale-95'
            }`}
        >
          <h1 className='text-neutral-200 text-xl'>Under construction :)</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Complete Name */}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className={`relative block overflow-hidden rounded-md text-white border border-[#59568fbd]/20 px-3 pt-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 transition duration-300 ease-in-out ${errors.name ? 'border-yellow-500/30' : 'border-[#59568fbd]/20'}`}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Name'
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 md:text-sm text-xs" />
                  <span
                    className="absolute start-3 top-3 -translate-y-1/2 md:text-sm text-xs text-[#afacdebd] transition-all peer-placeholder-shown:top-1/2 md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-xs peer-focus:top-3 md:peer-focus:text-xs md:peer-focus:text-[11px]">
                    Name
                  </span>
                </label>
                {errors.name && <p className="text-yellow-400 md:text-sm text-xs mt-1 text-left">{errors.name}</p>}
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`relative block overflow-hidden rounded-md text-white border border-[#59568fbd]/20 px-3 pt-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 transition duration-300 ease-in-out ${errors.email ? 'border-yellow-500/30' : 'border-[#59568fbd]/20'}`}>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Name'
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 md:text-sm text-xs" />
                  <span
                    className="absolute start-3 top-3 -translate-y-1/2 md:text-sm text-xs text-[#afacdebd] transition-all peer-placeholder-shown:top-1/2 md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-xs peer-focus:top-3 md:peer-focus:text-xs md:peer-focus:text-[11px]">
                    Email
                  </span>
                </label>
                {errors.email && <p className="text-yellow-400 md:text-sm text-xs mt-1 text-left">{errors.email}</p>}
              </div>
              {/* Message */}
              <div className='col-span-full'>
                <textarea
                  id="message"
                  className={`w-full rounded-lg bg-transparent border-[#59568fbd]/20 align-top text-white placeholder:text-[#afacdebd] shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 transition duration-300 ease-in-out sm:text-sm md:text-sm text-xs resize-none ${errors.message ? 'border-yellow-500/30' : 'border-[#59568fbd]/20'}`}
                  rows="2"
                  placeholder="Your message here..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-yellow-400 md:text-sm text-xs mt-1 text-left">{errors.message}</p>}
              </div>
            </div>
            {/* Preview */}
            <div className="pt-6 space-y-1">
              <p className='text-xs text-left'>Preview:</p>
              <p className="italic text-start">
                &ldquo;Hi there! I&apos;m{" "}
                {formData.name ? (
                  <span className="text-indigo-500">{formData.name}</span>
                ) : (
                  <span className="text-indigo-500">your name</span>
                )}
                . You can reach me at{" "}
                {formData.email ? (
                  <span className="text-indigo-500">{formData.email}</span>
                ) : (
                  <span className="text-indigo-500">your email</span>
                )}
                , Here&apos;s my message;{" "}
                {formData.message ? (
                  <span className="text-indigo-500">{formData.message}</span>
                ) : (
                  <span className="text-indigo-500">your message</span>
                )}&rdquo;
              </p>
            </div>
            {/* Action Buttons */}
            <div className='flex justify-center gap-3 pt-8'>
              <button onClick={closeModalForm} type="button">Close</button>
              <button type="submit" styles='bg-indigo-600 hover:bg-indigo-700'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      {/* Hero Section */}
      <div className="p-3 lg:h-screen h-[70vh]">
        <div className='relative flex flex-col h-full justify-between bg-neutral-800/20 border border-neutral-800 rounded-3xl rounded-tr-[6.3rem] p-6'>
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
                  className="mt-2 size-8 border-2 ring-2 ring-indigo-500 border-neutral-950 rounded-full"
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
          <p className='text-xs'>{currentYear} • Frederick Moreno</p>
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
