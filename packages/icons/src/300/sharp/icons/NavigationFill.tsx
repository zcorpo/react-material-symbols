import type { SVGProps, JSX } from 'react'

export default function NavigationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M211.92-150 190-171.16l290-659.61 290 659.61L748.08-150 480-270.46 211.92-150Z" />
    </svg>
  )
}
