import type { SVGProps, JSX } from 'react'

export default function FlowchartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M601-135v-84H433v-214h-75v85H55v-265h303v86h75v-214h168v-85h305v265H601v-86h-74v333h74v-85h305v264H601Z" />
    </svg>
  )
}
