import type { SVGProps, JSX } from 'react'

export default function VerticalAlignBottom({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-140v-45.39h600V-140H180Zm300-124.62L298.31-446.31l32.61-32.61 126.39 126.38V-820h45.38v467.46l123.54-123.54 32.62 32.62L480-264.62Z" />
    </svg>
  )
}
