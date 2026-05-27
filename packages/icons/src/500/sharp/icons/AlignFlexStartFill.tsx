import type { SVGProps, JSX } from 'react'

export default function AlignFlexStartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-817.85v-68.37h812.2v68.37H74.02Zm351.91 675.7v-571.92h108.14v571.92H425.93Z" />
    </svg>
  )
}
