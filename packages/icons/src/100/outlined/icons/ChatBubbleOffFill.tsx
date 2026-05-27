import type { SVGProps } from 'react'

export default function ChatBubbleOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M773-290 241-828h533q23 0 38.5 15.5T828-774v428q0 25-15.5 39.5T773-290Zm47 178L641-292H244L132-180v-620l-80-80 16-16 768 768-16 16Z" />
    </svg>
  )
}
