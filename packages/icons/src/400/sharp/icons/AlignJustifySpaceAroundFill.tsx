import type { SVGProps, JSX } from 'react'

export default function AlignJustifySpaceAroundFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M820-80v-800h60v800h-60ZM80-80v-800h60v800H80Zm530-210v-380h100v380H610Zm-360 0v-380h100v380H250Z" />
    </svg>
  )
}
