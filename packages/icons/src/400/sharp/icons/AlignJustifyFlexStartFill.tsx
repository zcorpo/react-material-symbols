import type { SVGProps, JSX } from 'react'

export default function AlignJustifyFlexStartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-800h60v800H80Zm450-210v-380h100v380H530Zm-240 0v-380h100v380H290Z" />
    </svg>
  )
}
