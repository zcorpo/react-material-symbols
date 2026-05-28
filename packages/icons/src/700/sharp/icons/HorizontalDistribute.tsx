import type { SVGProps, JSX } from 'react'

export default function HorizontalDistribute({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-55v-851h94v851H55Zm358-208v-434h134v434H413ZM811-55v-851h95v851h-95Z" />
    </svg>
  )
}
