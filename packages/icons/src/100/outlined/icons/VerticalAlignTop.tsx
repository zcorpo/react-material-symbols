import type { SVGProps, JSX } from 'react'

export default function VerticalAlignTop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-766v-22h536v22H212Zm257 594v-441L334-478l-16-16 162-162 161 161-16 16-134-134v441h-22Z" />
    </svg>
  )
}
