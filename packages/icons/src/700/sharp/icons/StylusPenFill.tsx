import type { SVGProps, JSX } from 'react'

export default function StylusPenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m219-321 109-396h66v-60l65-129h41l66 129v60h66l108 396H219ZM135-95l54-126h581l56 126H135Z" />
    </svg>
  )
}
