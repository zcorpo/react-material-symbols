import type { SVGProps, JSX } from 'react'

export default function LineEndDiamondFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M600-244.62 387.31-457.31H101.54v-45.38h285.77L600-715.38 835.38-480 600-244.62Z" />
    </svg>
  )
}
