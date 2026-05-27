import type { SVGProps, JSX } from 'react'

export default function LineEndDiamondFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M600-179 346-433H63v-94h283l254-254 301 301-301 301Z" />
    </svg>
  )
}
