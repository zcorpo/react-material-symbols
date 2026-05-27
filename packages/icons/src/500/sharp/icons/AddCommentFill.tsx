import type { SVGProps, JSX } from 'react'

export default function AddCommentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M448.57-398.57h62.86v-130h130v-62.86h-130v-130h-62.86v130h-130v62.86h130v130ZM74.02-74.02v-812.2h812.2v652.2h-652.2l-160 160Z" />
    </svg>
  )
}
