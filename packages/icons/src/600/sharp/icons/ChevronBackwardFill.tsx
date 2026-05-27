import type { SVGProps } from 'react'

export default function ChevronBackwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M561-226.43 306.43-481 561-735.57 617.57-679l-198 198 198 198L561-226.43Z" />
    </svg>
  )
}
