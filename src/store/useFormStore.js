import { create } from 'zustand'

export const useFormStore = create((set) => ({

  // modal states
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),

  // form data
  formData: {
    name: '',
    email: '',
    message: '',
  },

  // update form
  updateFormData: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value }
    })),

  // reset form
  resetForm: () =>
    set({
      formData: { name: '', email: '', message: '' },
      isModalOpen: false
    })

}))