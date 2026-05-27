import type { SVGProps } from 'react'

export default function SubheaderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M235.09-564.91h349.82v-103H235.09v103ZM105.87-105.87V-854.7H854.7v748.83H105.87Z" />
    </svg>
  )
}
