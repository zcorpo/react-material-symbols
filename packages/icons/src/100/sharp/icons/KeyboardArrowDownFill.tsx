import type { SVGProps } from 'react'

export default function KeyboardArrowDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-380 276-584l16-16 188 188 188-188 16 16-204 204Z" />
    </svg>
  )
}
