import type { SVGProps, JSX } from 'react'

export default function AddCommentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-426h22v-123h123v-22H491v-123h-22v123H346v22h123v123ZM132-180v-648h696v536H244L132-180Z" />
    </svg>
  )
}
