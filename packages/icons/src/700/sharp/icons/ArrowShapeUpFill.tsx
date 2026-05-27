import type { SVGProps } from 'react'

export default function ArrowShapeUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M307-95v-241H95l385-490 386 490H653v241H307Z" />
    </svg>
  )
}
