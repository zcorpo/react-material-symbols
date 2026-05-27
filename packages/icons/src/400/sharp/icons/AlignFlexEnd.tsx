import type { SVGProps } from 'react'

export default function AlignFlexEnd({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-60h800v60H80Zm350-170v-570h100v570H430Z" />
    </svg>
  )
}
