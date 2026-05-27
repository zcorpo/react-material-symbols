import type { SVGProps, JSX } from 'react'

export default function HorizontalDistribute({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-100v-760h50v760h-50Zm337.31-190v-380h85.38v380h-85.38ZM810-100v-760h50v760h-50Z" />
    </svg>
  )
}
