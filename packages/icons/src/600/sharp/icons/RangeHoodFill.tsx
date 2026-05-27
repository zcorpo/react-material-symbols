import type { SVGProps } from 'react'

export default function RangeHoodFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M87.09-474.22 267-658.09V-853h426v194.91l178.91 183.87H87.09ZM67-147v-267.22h826V-147H67Zm307-149.83h212v-46.21H374v46.21Z" />
    </svg>
  )
}
