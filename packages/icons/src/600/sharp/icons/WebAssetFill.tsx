import type { SVGProps, JSX } from 'react'

export default function WebAssetFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7H894.7v668.83H65.87Zm79.22-79.22h669.82v-416.78H145.09v416.78Z" />
    </svg>
  )
}
