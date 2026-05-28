import type { SVGProps, JSX } from 'react'

export default function CurtainsClosedFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-120v-60h80v-660h640v660h80v60H80Zm345-60h110v-600H425v600Z" />
    </svg>
  )
}
