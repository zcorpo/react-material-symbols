import type { SVGProps } from 'react'

export default function MangaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm271-60h469v-456l-140 47-119-39-74 102-120 38v126.13L293-300l58 80Z" />
    </svg>
  )
}
