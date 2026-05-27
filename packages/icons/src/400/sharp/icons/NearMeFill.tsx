import type { SVGProps } from 'react'

export default function NearMeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M527-120 413-413 120-527v-43l720-270-270 720h-43Z" />
    </svg>
  )
}
