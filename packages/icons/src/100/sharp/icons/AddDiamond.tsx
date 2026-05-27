import type { SVGProps } from 'react'

export default function AddDiamond({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-341h22v-128h128v-22H491v-128h-22v128H341v22h128v128Zm11 231L109-480l371-370 371 370-371 370Zm0-30 340-340-340-340-340 340 340 340Zm0-340Z" />
    </svg>
  )
}
