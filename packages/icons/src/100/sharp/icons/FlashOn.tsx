import type { SVGProps } from 'react'

export default function FlashOn({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m474-317 187-272H519l63-217H374v332h100v157Zm-22 73v-208H352v-376h259l-63 217h155L452-244Zm22-230H374h100Z" />
    </svg>
  )
}
