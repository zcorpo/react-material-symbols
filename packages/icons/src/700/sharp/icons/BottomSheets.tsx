import type { SVGProps, JSX } from 'react'

export default function BottomSheets({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm94-391h582v-285H189v285Zm0 95v202h582v-202H189Zm0 0v202-202Z" />
    </svg>
  )
}
