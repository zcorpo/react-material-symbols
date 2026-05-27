import type { SVGProps } from 'react'

export default function AlignFlexEnd({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-65.87v-79.22H894.7v79.22H65.87Zm354.52-174.52v-574.52h119.22v574.52H420.39Z" />
    </svg>
  )
}
