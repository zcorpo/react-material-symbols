import type { SVGProps, JSX } from 'react'

export default function AddCommentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-426h22v-123h123v-22H491v-123h-22v123H346v22h123v123ZM132-180v-594q0-22.78 15.61-38.39Q163.23-828 186-828h588q22.78 0 38.39 15.61T828-774v428q0 22.77-15.61 38.39Q796.78-292 774-292H244L132-180Z" />
    </svg>
  )
}
