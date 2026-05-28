import type { SVGProps, JSX } from 'react'

export default function Crop916({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M275-120v-720h410v720H275Zm60-660v600h290v-600H335Zm0 600v-600 600Z" />
    </svg>
  )
}
