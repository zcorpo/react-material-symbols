import type { SVGProps, JSX } from 'react'

export default function AlignFlexCenter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M482-132v-317H143v-62h339v-317h22v317h313v62H504v317h-22Z" />
    </svg>
  )
}
