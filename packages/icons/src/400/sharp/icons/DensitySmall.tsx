import type { SVGProps } from 'react'

export default function DensitySmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-80v-60h720v60H120Zm0-247v-60h720v60H120Zm0-246v-60h720v60H120Zm0-247v-60h720v60H120Z" />
    </svg>
  )
}
