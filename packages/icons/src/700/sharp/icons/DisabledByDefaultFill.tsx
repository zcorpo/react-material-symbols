import type { SVGProps } from 'react'

export default function DisabledByDefaultFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm241-191 144-144 144 144 50-50-144-144 144-144-50-50-144 144-144-144-50 50 144 144-144 144 50 50Z" />
    </svg>
  )
}
