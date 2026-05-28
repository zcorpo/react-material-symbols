import type { SVGProps, JSX } from 'react'

export default function IosFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M97-609v-83h83v83H97Zm0 346v-303h83v303H97Zm167 0v-434h259v434H264Zm83-83h94v-268h-94v268Zm257 83v-83h177v-97H604v-254h259v83H687v89h176v262H604Z" />
    </svg>
  )
}
