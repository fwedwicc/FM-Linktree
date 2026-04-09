'use client'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { getSvgPath } from 'figma-squircle'

export function Squircle({
  width,
  height,
  cornerRadius = 40,
  className,
  dropShadow,
  children,
  fill = false,
  auto = false,
  widthMode,
  heightMode,
}) {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const [containerSize, setContainerSize] = useState({ width: 1, height: 1 })
  const [contentSize, setContentSize] = useState({ width: 1, height: 1 })

  const resolvedWidthMode = widthMode ?? (fill ? 'fill' : auto ? 'auto' : 'fixed')
  const resolvedHeightMode = heightMode ?? (fill ? 'fill' : auto ? 'auto' : 'fixed')

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    const measure = () => {
      const { width: w, height: h } = el.getBoundingClientRect()
      const nw = Math.max(1, Math.round(w))
      const nh = Math.max(1, Math.round(h))
      setContainerSize((prev) => (prev.width === nw && prev.height === nh ? prev : { width: nw, height: nh }))
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useLayoutEffect(() => {
    const el = contentRef.current
    if (!el) return

    const measure = () => {
      const { width: w, height: h } = el.getBoundingClientRect()
      const nw = Math.max(1, Math.round(w))
      const nh = Math.max(1, Math.round(h))
      setContentSize((prev) => (prev.width === nw && prev.height === nh ? prev : { width: nw, height: nh }))
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const w = resolvedWidthMode === 'fill'
    ? containerSize.width
    : resolvedWidthMode === 'auto'
      ? contentSize.width
      : width
  const h = resolvedHeightMode === 'fill'
    ? containerSize.height
    : resolvedHeightMode === 'auto'
      ? contentSize.height
      : height
  const shouldClip = w > 1 && h > 1
  const id = `squircle-${w}-${h}-${String(cornerRadius).replace('.', '_')}`
  const path = getSvgPath({ width: w, height: h, cornerRadius, cornerSmoothing: 1 })

  return (
    <div
      ref={containerRef}
      style={{
        width: resolvedWidthMode === 'fill' ? '100%' : resolvedWidthMode === 'auto' ? 'fit-content' : w,
        height: resolvedHeightMode === 'fill' ? '100%' : resolvedHeightMode === 'auto' ? 'fit-content' : h,
        position: 'relative',
        filter: dropShadow,
        display: resolvedWidthMode === 'auto' || resolvedHeightMode === 'auto' ? 'inline-block' : undefined,
      }}
      className={resolvedWidthMode === 'fill' || resolvedHeightMode === 'fill' ? 'min-h-0' : undefined}
    >
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <clipPath id={id} clipPathUnits="userSpaceOnUse">
            <path d={path} />
          </clipPath>
        </defs>
      </svg>
      <div
        ref={contentRef}
        style={{
          width: resolvedWidthMode === 'fill' ? '100%' : resolvedWidthMode === 'auto' ? 'fit-content' : w,
          height: resolvedHeightMode === 'fill' ? '100%' : resolvedHeightMode === 'auto' ? 'fit-content' : h,
          clipPath: shouldClip ? `url(#${id})` : undefined,
        }}
        className={className}
      >
        {children}
      </div>
    </div>
  )
}