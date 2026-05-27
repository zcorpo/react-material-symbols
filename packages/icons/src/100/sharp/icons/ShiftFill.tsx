import type { SVGProps, JSX } from 'react'

export default function ShiftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M372-172v-277H230l250-349 250 349H588v277H372Z" />
    </svg>
  )
}
