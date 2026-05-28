import type { SVGProps, JSX } from 'react'

export default function ArrowBackIosNewFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M656.13-66.43 242-480l414.13-413.57L725.7-823l-343 343 343 343-69.57 70.57Z" />
    </svg>
  )
}
