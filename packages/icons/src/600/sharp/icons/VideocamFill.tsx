import type { SVGProps } from 'react'

export default function VideocamFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7H734.7V-525l160-160v410l-160-160v289.13H65.87Z" />
    </svg>
  )
}
