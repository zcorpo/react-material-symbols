import type { SVGProps } from 'react'

export default function Upload2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-100v-45.39h600V-100H180Zm192.69-155.39v-275.76h-146L480-860l252.31 328.85H586.92v275.76H372.69Z" />
    </svg>
  )
}
