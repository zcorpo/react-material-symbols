import type { SVGProps, JSX } from 'react'

export default function OutpatientMedFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m780-339-42-43 68-68H640v-59h165l-68-68 43-43 140 140.5L780-339ZM80-780v-60h480v60H80Zm190 510h100v-100h100v-100H370v-100H270v100H170v100h100v100ZM40-120v-600h560v600H40Z" />
    </svg>
  )
}
