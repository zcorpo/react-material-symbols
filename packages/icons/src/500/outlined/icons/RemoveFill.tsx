import type { SVGProps, JSX } from 'react'

export default function RemoveFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M194.02-445.93v-68.14h572.2v68.14h-572.2Z" />
    </svg>
  )
}
