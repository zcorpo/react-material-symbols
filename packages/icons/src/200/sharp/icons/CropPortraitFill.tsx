import type { SVGProps, JSX } from 'react'

export default function CropPortraitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-120v-720h560v720H200Z" />
    </svg>
  )
}
