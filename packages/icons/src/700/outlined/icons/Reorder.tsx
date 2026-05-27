import type { SVGProps } from 'react'

export default function Reorder({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-175v-87h771v87H95Zm0-175v-87h771v87H95Zm0-173v-87h771v87H95Zm0-176v-87h771v87H95Z" />
    </svg>
  )
}
