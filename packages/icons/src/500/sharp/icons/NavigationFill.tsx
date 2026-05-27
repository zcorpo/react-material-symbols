import type { SVGProps } from 'react'

export default function NavigationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m188.57-109-35.74-35.74L480-891l327.17 746.26L771.43-109 480-241.72 188.57-109Z" />
    </svg>
  )
}
