import type { SVGProps, JSX } from 'react'

export default function AlignFlexStartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-814.61V-860h760v45.39H100Zm337.31 669.22v-547.3h85.38v547.3h-85.38Z" />
    </svg>
  )
}
