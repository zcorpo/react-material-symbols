import type { SVGProps, JSX } from 'react'

export default function ClearAllFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-229v-94h590v94H95Zm90-204v-94h590v94H185Zm91-204v-93h590v93H276Z" />
    </svg>
  )
}
