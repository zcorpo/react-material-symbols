import type { SVGProps, JSX } from 'react'

export default function DropdownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M465.91-465.91h250v-250h-250v250ZM105.87-105.87V-854.7H854.7v748.83H105.87Z" />
    </svg>
  )
}
