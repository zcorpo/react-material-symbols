import type { SVGProps, JSX } from 'react'

export default function BrowseActivityFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55.39-150.77v-45.39h849.22v45.39H55.39Zm44.61-100v-277.31h205.62l80 160h28.53L558-622.31l47.39 94.23H860v277.31H100Zm302.38-185.46-67.61-137.23H100v-237.31h760v237.31H633.77l-58-117.62h-29.92L402.38-436.23Z" />
    </svg>
  )
}
