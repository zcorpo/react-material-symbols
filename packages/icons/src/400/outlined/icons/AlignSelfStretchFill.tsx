import type { SVGProps, JSX } from 'react'

export default function AlignSelfStretchFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-820v-60h800v60H80Zm0 740v-60h800v60H80Zm350-190v-440h100v440H430Z" />
    </svg>
  )
}
