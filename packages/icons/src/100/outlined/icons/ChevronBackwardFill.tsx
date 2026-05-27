import type { SVGProps } from 'react'

export default function ChevronBackwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M560-276 356-480l204-205 16 16-188 189 188 188-16 16Z" />
    </svg>
  )
}
