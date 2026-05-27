import type { SVGProps, JSX } from 'react'

export default function ModeCommentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-280v-560h720v683.08L716.92-280H120Z" />
    </svg>
  )
}
