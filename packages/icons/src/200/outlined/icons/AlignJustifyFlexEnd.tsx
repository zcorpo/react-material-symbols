import type { SVGProps, JSX } from 'react'

export default function AlignJustifyFlexEnd({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M809.23-120v-720H840v720h-30.77ZM584.62-304.62v-350.76h70.76v350.76h-70.76Zm-240 0v-350.76h70.76v350.76h-70.76Z" />
    </svg>
  )
}
