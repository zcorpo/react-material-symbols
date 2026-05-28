import type { SVGProps, JSX } from 'react'

export default function GlassCup({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M189-55 95-906h771L772-55H189Zm76-181 9 87h413l9-87H265Zm-12-95h454l53-480H200l53 480Zm12 182h431-431Z" />
    </svg>
  )
}
