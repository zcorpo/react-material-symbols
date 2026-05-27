import type { SVGProps, JSX } from 'react'

export default function ChevronLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M561-216 296-481l265-265 67 67-198 198 198 198-67 67Z" />
    </svg>
  )
}
