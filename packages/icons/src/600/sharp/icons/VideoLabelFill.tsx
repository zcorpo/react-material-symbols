import type { SVGProps } from 'react'

export default function VideoLabelFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7H894.7v668.83H65.87Zm79.22-198.04h669.82v-391H145.09v391Z" />
    </svg>
  )
}
