import type { SVGProps, JSX } from 'react'

export default function FullscreenPortraitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M328-248h304v-464H328v464Zm420 116H212v-696h536v696Z" />
    </svg>
  )
}
