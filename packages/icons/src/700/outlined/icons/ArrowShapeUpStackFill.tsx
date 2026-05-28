import type { SVGProps, JSX } from 'react'

export default function ArrowShapeUpStackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M353-130v-128H136l345-375 346 375H609v128H353ZM135-477l346-375 346 375H726L481-742 236-477H135Z" />
    </svg>
  )
}
