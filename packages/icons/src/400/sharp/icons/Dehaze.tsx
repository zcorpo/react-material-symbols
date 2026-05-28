import type { SVGProps, JSX } from 'react'

export default function Dehaze({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-700v-60h720v60H120Zm0 500v-60h720v60H120Zm0-250v-60h720v60H120Z" />
    </svg>
  )
}
