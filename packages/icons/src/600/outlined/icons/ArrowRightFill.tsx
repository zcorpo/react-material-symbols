import type { SVGProps } from 'react'

export default function ArrowRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M390.39-256.82v-446.36L613.57-480 390.39-256.82Z" />
    </svg>
  )
}
