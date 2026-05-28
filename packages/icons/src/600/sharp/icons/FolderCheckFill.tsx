import type { SVGProps, JSX } from 'react'

export default function FolderCheckFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m442.48-305.91 200.69-201.13-56.13-56.13-144.56 144.56-72-72-55.57 56.57 127.57 128.13ZM65.87-145.87V-814.7h348.91L481-747.91h413.7v602.04H65.87Z" />
    </svg>
  )
}
