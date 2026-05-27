import type { SVGProps } from 'react'

export default function AlignFlexCenterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M454.35-65.87v-354.52H105.48v-119.22h348.87V-894.7h79.78v355.09h320.39v119.22H534.13v354.52h-79.78Z" />
    </svg>
  )
}
