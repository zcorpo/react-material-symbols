import type { SVGProps } from 'react'

export default function ArrowShapeUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M330.77-140v-228.85H140L480-780l340 411.15H629.23V-140H330.77Z" />
    </svg>
  )
}
