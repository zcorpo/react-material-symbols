import type { SVGProps, JSX } from 'react'

export default function Capture({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M235.09-315.09h489.82v-329.82H235.09v329.82ZM65.87-145.87V-814.7H894.7v668.83H65.87Zm79.22-79.22h669.82v-509.82H145.09v509.82Zm0 0v-509.82 509.82Z" />
    </svg>
  )
}
