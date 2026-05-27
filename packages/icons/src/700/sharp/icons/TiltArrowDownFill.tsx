import type { SVGProps, JSX } from 'react'

export default function TiltArrowDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-95v-771h691v771H135Zm305-341-51-53-56 56 147 147 147-147-56-55-51 52v-196h-80v196Z" />
    </svg>
  )
}
