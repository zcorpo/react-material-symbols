import type { SVGProps, JSX } from 'react'

export default function ArrowTopRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M252-212v-401h453L546-772l16-16 186 187-186 186-16-16 160-160H274v379h-22Z" />
    </svg>
  )
}
