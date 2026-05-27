import type { SVGProps, JSX } from 'react'

export default function Add2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-172v-297H172v-22h297v-297h22v297h297v22H491v297h-22Z" />
    </svg>
  )
}
