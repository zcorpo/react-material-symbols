import type { SVGProps, JSX } from 'react'

export default function InHomeMode({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-518ZM212-212v-392l-107 79-13-17 388-286 389 286-13 17-376-276-246 182v385h125v22H212Zm374 80L457-261l16-15 113 113 227-226 15 15-242 242Z" />
    </svg>
  )
}
