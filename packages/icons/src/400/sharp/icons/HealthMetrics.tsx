import type { SVGProps, JSX } from 'react'

export default function HealthMetrics({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-80v-200H80v-400h200v-200h400v200h200v400H680v200H280ZM140-510h236l56 83 69-218h26l91 135h202v-110H620v-200H340v200H140v110Zm200 370h280v-200h200v-110H586l-56-83-70 217h-25l-91-134H140v110h200v200Zm140-340Z" />
    </svg>
  )
}
