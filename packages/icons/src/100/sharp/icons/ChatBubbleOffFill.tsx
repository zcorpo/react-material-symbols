import type { SVGProps, JSX } from 'react'

export default function ChatBubbleOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M773-290 241-828h587v538h-55Zm47 178L641-292H244L132-180v-620l-80-80 16-16 768 768-16 16Z" />
    </svg>
  )
}
