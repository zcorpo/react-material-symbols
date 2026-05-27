import type { SVGProps } from 'react'

export default function FloatLandscape2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M519.61-399.61h221.93v-261.93H519.61v261.93ZM100-180v-600h760v600H100Z" />
    </svg>
  )
}
