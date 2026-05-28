import type { SVGProps, JSX } from 'react'

export default function LanFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M97-57v-299h126v-165h216v-83H313v-299h334v299H521v83h216v165h126v299H534v-299h120v-83H306v83h120v299H97Z" />
    </svg>
  )
}
