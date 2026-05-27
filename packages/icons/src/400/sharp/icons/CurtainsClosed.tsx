import type { SVGProps } from 'react'

export default function CurtainsClosed({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-120v-60h80v-660h640v660h80v60H80Zm140-60h145v-600H220v600Zm205 0h110v-600H425v600Zm170 0h145v-600H595v600Zm-375 0v-600 600Zm520 0v-600 600Z" />
    </svg>
  )
}
