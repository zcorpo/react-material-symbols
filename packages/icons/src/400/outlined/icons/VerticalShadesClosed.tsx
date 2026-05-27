import type { SVGProps } from 'react'

export default function VerticalShadesClosed({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-120v-60h80v-660h640v660h80v60H80Zm140-60h85v-600h-85v600Zm145 0h85v-600h-85v600Zm145 0h85v-600h-85v600Zm145 0h85v-600h-85v600Z" />
    </svg>
  )
}
