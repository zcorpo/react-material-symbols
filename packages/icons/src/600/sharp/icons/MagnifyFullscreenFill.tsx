import type { SVGProps } from 'react'

export default function MagnifyFullscreenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7H894.7v668.83H65.87Zm494.52-244.52h79.22v-90h90v-79.22h-90v-90h-79.22v90h-90v79.22h90v90Z" />
    </svg>
  )
}
