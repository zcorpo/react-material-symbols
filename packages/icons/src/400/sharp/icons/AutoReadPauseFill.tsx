import type { SVGProps } from 'react'

export default function AutoReadPauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M370-400h60v-320h-60v320Zm160 0h60v-320h-60v320ZM80-80v-800h800v640H240L80-80Z" />
    </svg>
  )
}
