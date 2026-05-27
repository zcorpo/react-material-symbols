import type { SVGProps } from 'react'

export default function SouthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-100 213.08-366.92l31.61-31.62 212.62 213v-674.84h45.38v674.46l212.62-213 31.61 32L480-100Z" />
    </svg>
  )
}
