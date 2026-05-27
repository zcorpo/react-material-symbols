import type { SVGProps, JSX } from 'react'

export default function ChevronLineUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M235.93-657.61v-68.13h488.14v68.13H235.93ZM292-223.93l-48.74-48.74L480-509.41l240.74 240.74L672-219.93l-192-192-188 188Z" />
    </svg>
  )
}
