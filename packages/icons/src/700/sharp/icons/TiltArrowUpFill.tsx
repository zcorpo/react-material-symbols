import type { SVGProps } from 'react'

export default function TiltArrowUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m55-95 169-771h512L906-95H55Zm385-394v196h80v-196l51 52 56-55-147-147-147 147 56 55 51-52Z" />
    </svg>
  )
}
