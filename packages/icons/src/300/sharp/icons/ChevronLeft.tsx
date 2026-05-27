import type { SVGProps, JSX } from 'react'

export default function ChevronLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M560.62-253.85 333.85-480.62l226.77-227.15 32.61 32.62-194.15 194.53 194.15 194.16-32.61 32.61Z" />
    </svg>
  )
}
