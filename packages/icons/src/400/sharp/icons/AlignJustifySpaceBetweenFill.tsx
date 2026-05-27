import type { SVGProps, JSX } from 'react'

export default function AlignJustifySpaceBetweenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M820-80v-210H720v-380h100v-210h60v800h-60ZM80-80v-800h60v210h100v380H140v210H80Z" />
    </svg>
  )
}
