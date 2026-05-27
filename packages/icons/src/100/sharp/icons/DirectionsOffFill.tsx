import type { SVGProps, JSX } from 'react'

export default function DirectionsOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M856-72 643-285 480-123 123-480l178-178 240 238v34L90-838l16-16L872-88l-16 16ZM346-387h22v-123h83l-22-22h-56q-11 0-19 8t-8 19v118Zm364 34L594-471l50-50-71-70v59h-41L353-710l127-127 357 357-127 127Z" />
    </svg>
  )
}
