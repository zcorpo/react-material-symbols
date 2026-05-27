import type { SVGProps } from 'react'

export default function HorizontalAlignRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M771-135v-691h95v691h-95ZM496-262l-67-67 104-104H95v-94h438L433-627l67-67 214 214-218 218Z" />
    </svg>
  )
}
