import type { SVGProps } from 'react'

export default function DeveloperGuideFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h720v720H120Zm360-660v279l98-59 98 59v-279H480Z" />
    </svg>
  )
}
