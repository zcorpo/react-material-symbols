import type { SVGProps } from 'react'

export default function MinimizeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-160v-30.77h440.23V-160H260Z" />
    </svg>
  )
}
