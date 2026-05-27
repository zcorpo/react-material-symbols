import type { SVGProps } from 'react'

export default function DisabledByDefaultFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm164-149 144-144 144 144 15-15-144-144 144-144-15-15-144 144-144-144-15 15 144 144-144 144 15 15Z" />
    </svg>
  )
}
