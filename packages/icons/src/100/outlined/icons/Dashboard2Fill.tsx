import type { SVGProps, JSX } from 'react'

export default function Dashboard2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M601-212v-221h227v221H601ZM453-527v-221h375v221H453ZM132-212v-221h375v221H132Zm0-315v-221h227v221H132Z" />
    </svg>
  )
}
