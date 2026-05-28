import type { SVGProps, JSX } from 'react'

export default function AlignStart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-820v-60h800v60H80Zm210 250v-100h380v100H290Zm0 240v-100h380v100H290Z" />
    </svg>
  )
}
