import type { SVGProps } from 'react'

export default function GlassCupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M197.13-65.87 105.87-894.7H854.7L763.3-65.87H197.13Zm51.45-256.43h462.77l54.3-492.61h-571.3l54.23 492.61Z" />
    </svg>
  )
}
