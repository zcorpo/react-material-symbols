import type { SVGProps, JSX } from 'react'

export default function GlassCupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M188.77-55 95-906h771L772-55H188.77Zm64.1-276H707l53-480H200l52.87 480Z" />
    </svg>
  )
}
