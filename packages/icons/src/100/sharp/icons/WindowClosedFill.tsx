import type { SVGProps, JSX } from 'react'

export default function WindowClosedFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-172v-616h536v616H212Zm47-319h193v-28h56v28h193v-250H259v250Zm0 272h442v-250H259v250Zm-25 25h492v-572H234v572Z" />
    </svg>
  )
}
