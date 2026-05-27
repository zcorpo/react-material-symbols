import type { SVGProps } from 'react'

export default function CaptureFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M235.09-315.09h489.82v-329.82H235.09v329.82ZM65.87-145.87V-814.7H894.7v668.83H65.87Z" />
    </svg>
  )
}
