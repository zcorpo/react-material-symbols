import type { SVGProps } from 'react'

export default function FolderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7h348.91L481-747.91h413.7v602.04H65.87Z" />
    </svg>
  )
}
