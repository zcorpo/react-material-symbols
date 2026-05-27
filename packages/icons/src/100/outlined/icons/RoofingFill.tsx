import type { SVGProps, JSX } from 'react'

export default function RoofingFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M382-212v-196h196v196H382ZM105-485l-13-17 388-286 183 135v-95h56v135l150 111-13 17-376-276-375 276Z" />
    </svg>
  )
}
