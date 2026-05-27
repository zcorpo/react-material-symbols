import type { SVGProps, JSX } from 'react'

export default function SplitscreenTop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-520.39v-287.3h680v287.3H140Zm0 368.08v-287.3h680v287.3H140Zm45.39-45.38h589.22v-196.54H185.39v196.54Z" />
    </svg>
  )
}
