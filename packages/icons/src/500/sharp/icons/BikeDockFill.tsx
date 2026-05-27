import type { SVGProps } from 'react'

export default function BikeDockFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-114.02v-68.13l194.85-50.48 63.48-613.59h215.3l63.48 613.59 195.09 50.48v68.13h-732.2Zm325.74-109.33h80v-554.5h-80v554.5Z" />
    </svg>
  )
}
