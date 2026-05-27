import type { SVGProps } from 'react'

export default function Crop219Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-265.87V-694.7H894.7v428.83H65.87Z" />
    </svg>
  )
}
