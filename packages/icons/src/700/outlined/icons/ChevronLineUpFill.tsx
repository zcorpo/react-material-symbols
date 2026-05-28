import type { SVGProps, JSX } from 'react'

export default function ChevronLineUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M223-650v-94h514v94H223Zm69 439-67-67 255-255 259 259-67 67-192-192-188 188Z" />
    </svg>
  )
}
