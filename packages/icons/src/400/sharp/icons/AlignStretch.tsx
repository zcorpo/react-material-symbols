import type { SVGProps } from 'react'

export default function AlignStretch({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M290-570v-250H80v-60h800v60H670v250H290ZM80-80v-60h210v-250h380v250h210v60H80Z" />
    </svg>
  )
}
