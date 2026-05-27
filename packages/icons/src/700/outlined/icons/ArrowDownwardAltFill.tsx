import type { SVGProps } from 'react'

export default function ArrowDownwardAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M479-216 214-481l66-67 153 150v-376h94v378l151-151 66 66-265 265Z" />
    </svg>
  )
}
