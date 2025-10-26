import { useEffect, useRef } from "react"
import { gsap } from "gsap"

/**
 * Custom hook for GSAP text animation
 * Splits text into words and animates them from below
 * 
 * @param {Object} options - Animation options
 * @param {number} options.duration - Animation duration (default: 1.5)
 * @param {number} options.yPercent - Y offset percentage (default: 100)
 * @param {string} options.ease - GSAP easing function (default: "power4")
 * @param {number} options.stagger - Stagger delay between words (default: 0.1)
 * @param {number} options.delay - Initial delay before animation starts (default: 0)
 * @param {any} options.trigger - Optional dependency to re-trigger animation
 * @returns {React.RefObject} - Ref to attach to the text element
 */
export function useTextAnimation(options = {}) {
  const {
    duration = 1.5,
    yPercent = 100,
    ease = "power4",
    stagger = 0.1,
    delay = 0,
    trigger
  } = options

  const elementRef = useRef(null)
  const originalTextRef = useRef(null)

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current

      // Store original text on first render
      if (!originalTextRef.current) {
        originalTextRef.current = element.textContent
      }

      const text = originalTextRef.current

      // Split text into words
      const words = text.split(' ')

      // Clear the element
      element.innerHTML = ''

      // Create wrapper for each word
      words.forEach((word, index) => {
        // Create parent wrapper
        const parent = document.createElement('span')
        parent.className = 'split-parent'
        parent.style.display = 'inline-block'

        // Create child wrapper
        const child = document.createElement('span')
        child.className = 'split-child'
        child.textContent = word

        parent.appendChild(child)
        element.appendChild(parent)

        // Add space after word (except last word)
        if (index < words.length - 1) {
          element.appendChild(document.createTextNode(' '))
        }
      })

      // Get all child elements for animation
      const childElements = element.querySelectorAll('.split-child')

      // Animate from below
      gsap.from(childElements, {
        duration,
        yPercent,
        ease,
        stagger,
        delay
      })
    }
  }, [duration, yPercent, ease, stagger, delay, trigger])

  return elementRef
}

