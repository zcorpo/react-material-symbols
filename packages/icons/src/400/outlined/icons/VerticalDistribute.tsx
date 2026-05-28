import type { SVGProps, JSX } from 'react'

export default function VerticalDistribute({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-60h800v60H80Zm200-350v-100h400v100H280ZM80-820v-60h800v60H80Z" />
    </svg>
  )
}
