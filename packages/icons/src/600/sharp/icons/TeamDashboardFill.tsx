import type { SVGProps } from 'react'

export default function TeamDashboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M410-105.87V-460H105.87v354.13H410Zm60 0h384.7V-460H470v354.13ZM105.87-520H854.7v-334.7H105.87V-520Z" />
    </svg>
  )
}
