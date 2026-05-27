import type { SVGProps } from 'react'

export default function PlayArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-203v-560l440 280-440 280Z" />
    </svg>
  )
}
