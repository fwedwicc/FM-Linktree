import { create } from 'zustand'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

export const useFormStore = create((set, get) => ({

  // modal states
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false, errors: {} }),

  // form data
  formData: {
    name: '',
    email: '',
    message: '',
  },

  // form state
  errors: {},
  isSubmitting: false,

  // update form
  updateFormData: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
      errors: { ...state.errors, [field]: undefined }
    })),

  // validation
  validate: () => {
    const { formData } = get()
    let formErrors = {}

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid'
    }

    if (!formData.message.trim()) {
      formErrors.message = 'Message is required'
    }

    set({ errors: formErrors })
    return Object.keys(formErrors).length === 0
  },

  // submit form
  submitForm: async () => {
    const { validate, formData, closeModal, resetForm } = get()

    if (!validate()) {
      return false
    }

    set({ isSubmitting: true, errors: {} })

    try {
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
      const publicUser = process.env.NEXT_PUBLIC_PUBLIC_USER

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicUser
      )

      set({ isSubmitting: false })

      resetForm()
      closeModal()
      toast.success('Message sent successfully :)')

      return true
    } catch (error) {
      console.error('Email send failed:', error)
      set({
        isSubmitting: false,
        errors: { submit: 'Failed to send message. Please try again.' }
      })

      return false
    }
  },

  // reset form
  resetForm: () =>
    set({
      formData: { name: '', email: '', message: '' },
      errors: {},
      isSubmitting: false
    })

}))