import type { SVGProps } from 'react'

export default function CheckSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M400-345 279-466l15-15 106 106 266-266 15 15-281 281Z" />
    </svg>
  )
}
