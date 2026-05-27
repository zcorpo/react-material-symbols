import type { SVGProps } from 'react'

export default function AlignSpaceEvenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-820v-60h800v60H80Zm0 740v-60h800v60H80Zm210-490v-100h380v100H290Zm0 280v-100h380v100H290Z" />
    </svg>
  )
}
