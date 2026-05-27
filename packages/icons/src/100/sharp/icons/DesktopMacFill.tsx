import type { SVGProps, JSX } from 'react'

export default function DesktopMacFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M391-172v-27l75-75H132v-514h696v514H494l75 75v27H391Z" />
    </svg>
  )
}
