import type { SVGProps } from 'react'

export default function StylusFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m322-199-156 33 33-156 123 123Zm17-15L214-339l461-460 124 124-460 461Z" />
    </svg>
  )
}
