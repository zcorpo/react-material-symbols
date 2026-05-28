import type { SVGProps, JSX } from 'react'

export default function AlignFlexEnd({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-74.02v-68.13h812.2v68.13H74.02Zm351.91-171.91v-571.92h108.14v571.92H425.93Z" />
    </svg>
  )
}
