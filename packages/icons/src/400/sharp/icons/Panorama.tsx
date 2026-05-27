import type { SVGProps } from 'react'

export default function Panorama({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm97-100h487L577-519 446-345l-92-129-117 154Zm-97 100v-520 520Z" />
    </svg>
  )
}
