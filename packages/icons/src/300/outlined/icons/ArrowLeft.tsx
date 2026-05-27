import type { SVGProps } from 'react'

export default function ArrowLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M550-303.85 373.85-480 550-656.15v352.3Z" />
    </svg>
  )
}
