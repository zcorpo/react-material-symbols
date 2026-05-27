import type { SVGProps, JSX } from 'react'

export default function ScreenShareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-120v-60h880v60H40Zm40-120v-600h800v600H80Zm253-147h60v-90q0-23.8 16.1-39.9Q425.2-533 449-533h81v70l100-100-100-100v70h-81q-48.33 0-82.17 33.83Q333-525.33 333-477v90Z" />
    </svg>
  )
}
