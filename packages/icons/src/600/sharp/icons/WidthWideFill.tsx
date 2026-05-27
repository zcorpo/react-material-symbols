import type { SVGProps } from 'react'

export default function WidthWideFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7H894.7v668.83H65.87Zm79.22-79.22h95.3v-509.82h-95.3v509.82Zm574.52 0h95.3v-509.82h-95.3v509.82Z" />
    </svg>
  )
}
