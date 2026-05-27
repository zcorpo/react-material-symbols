import type { SVGProps } from 'react'

export default function EmergencyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M441-151v-260L215-281l-40-68 227-131-226-130 39-68 226 130v-261h78v261l226-130 39 68-226 130 227 131-40 68-226-130v260h-78Z" />
    </svg>
  )
}
