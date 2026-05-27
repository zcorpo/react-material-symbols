import type { SVGProps, JSX } from 'react'

export default function HomeHealthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M444.62-304.62h70.76v-100h100v-70.76h-100v-100h-70.76v100h-100v70.76h100v100ZM200-160v-420l280-210.77L760-580v420H200Z" />
    </svg>
  )
}
