import type { SVGProps, JSX } from 'react'

export default function DraftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-120v-720h389.46L760-669.46V-120H200Zm374.08-535.54h155.15L574.08-809.23v153.69Z" />
    </svg>
  )
}
