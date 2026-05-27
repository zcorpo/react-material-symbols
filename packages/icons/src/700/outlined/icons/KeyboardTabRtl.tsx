import type { SVGProps } from 'react'

export default function KeyboardTabRtl({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M149-223H55v-514h94v514Zm364 8L248-480l265-265 66 66-151 152h478v94H428l153 152-68 66Z" />
    </svg>
  )
}
