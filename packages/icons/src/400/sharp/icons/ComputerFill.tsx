import type { SVGProps } from 'react'

export default function ComputerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-120v-60h880v60H40Zm40-120v-600h800v600H80Z" />
    </svg>
  )
}
