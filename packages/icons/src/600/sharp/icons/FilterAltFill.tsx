import type { SVGProps, JSX } from 'react'

export default function FilterAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M385.87-145.87v-289.04L89.17-814.7h781.66L574.7-434.91v289.04H385.87Z" />
    </svg>
  )
}
