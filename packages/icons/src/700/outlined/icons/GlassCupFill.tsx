import type { SVGProps } from 'react'

export default function GlassCupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M274-55q-36 0-63.5-24T180-138L95-906h771l-85 768q-4 35-31 59t-63 24H274Zm-21-276h454l53-480H200l53 480Z" />
    </svg>
  )
}
