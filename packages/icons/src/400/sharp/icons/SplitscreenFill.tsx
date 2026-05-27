import type { SVGProps, JSX } from 'react'

export default function SplitscreenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-533v-307h720v307H120Zm0 413v-308h720v308H120Z" />
    </svg>
  )
}
